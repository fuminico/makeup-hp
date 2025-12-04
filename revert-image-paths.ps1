# PowerShell script to revert all image paths back to standard format

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
    $content = Get-Content $file -Raw
    
    # Remove getImagePath import
    $content = $content -replace 'import \{ getImagePath \} from "@/lib/utils";\r?\n', ''
    
    # Revert image src paths from getImagePath() back to standard
    $content = $content -replace 'src=\{getImagePath\("(/images/[^"]+)"\)\}', 'src="$1"'
    
    # Write back to file
    Set-Content -Path $file -Value $content -NoNewline
    
    Write-Host "Updated: $file"
}

Write-Host "All files reverted successfully!"
