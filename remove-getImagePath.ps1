# PowerShell script to remove getImagePath calls and imports

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
    
    # Remove getImagePath import line
    $content = $content -replace 'import \{ getImagePath \} from "@/lib/utils";\r?\n', ''
    
    # Replace getImagePath("/images/...") with "/images/..."
    $content = $content -replace 'getImagePath\("(/images/[^"]+)"\)', '"$1"'
    
    # Write back to file with UTF8 encoding
    [System.IO.File]::WriteAllText($file, $content, [System.Text.Encoding]::UTF8)
    
    Write-Host "Updated: $file"
}

Write-Host "All files updated successfully!"
