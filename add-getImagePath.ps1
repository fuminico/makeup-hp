# PowerShell script to add getImagePath calls and imports

$files = @(
    "c:\Develop\makeup-hp\src\components\layout\Header.tsx",
    "c:\Develop\makeup-hp\src\app\page.tsx",
    "c:\Develop\makeup-hp\src\app\services\page.tsx",
    "c:\Develop\makeup-hp\src\app\service\sales\page.tsx",
    "c:\Develop\makeup-hp\src\app\service\development\page.tsx",
    "c:\Develop\makeup-hp\src\app\service\content\page.tsx",
    "c:\Develop\makeup-hp\src\app\service\consulting\page.tsx",
    "c:\Develop\makeup-hp\src\app\company\page.tsx"
)

foreach ($file in $files) {
    Write-Host "Processing: $file"
    
    # Read the file content
    $content = Get-Content $file -Raw -Encoding UTF8
    
    # Check if getImagePath is already imported
    if ($content -notmatch 'import \{ getImagePath \} from "@/lib/utils";') {
        # Add import after the last import or at the top
        if ($content -match '(import .*;\r?\n)+') {
            $content = $content -replace '((import .*;\r?\n)+)', "$1import { getImagePath } from ""@/lib/utils"";`n"
        } else {
            $content = "import { getImagePath } from ""@/lib/utils"";`n" + $content
        }
    }
    
    # Replace src="/images/..." with src={getImagePath("/images/...")}
    # We use a regex that looks for src="/images/..." and replaces it
    # Note: We need to be careful not to replace already wrapped ones (though we assume they are clean now)
    
    $content = $content -replace 'src="(/images/[^"]+)"', 'src={getImagePath("$1")}'
    
    # Write back to file with UTF8 encoding
    [System.IO.File]::WriteAllText($file, $content, [System.Text.Encoding]::UTF8)
    
    Write-Host "Updated: $file"
}

Write-Host "All files updated successfully!"
