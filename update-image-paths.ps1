# PowerShell script to update all image paths to use getImagePath helper

$files = @(
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
    
    # Add import if not present
    if ($content -notmatch 'import.*getImagePath.*from.*@/lib/utils') {
        # Find the last import statement
        $lastImportIndex = [regex]::Matches($content, 'import .* from .*;').Index | Select-Object -Last 1
        if ($lastImportIndex) {
            $insertPosition = $content.IndexOf(';', $lastImportIndex) + 1
            $content = $content.Insert($insertPosition, "`nimport { getImagePath } from `"@/lib/utils`";")
        }
    }
    
    # Replace all image src paths
    $content = $content -replace 'src="(/images/[^"]+)"', 'src={getImagePath("$1")}'
    
    # Write back to file
    Set-Content -Path $file -Value $content -NoNewline
    
    Write-Host "Updated: $file"
}

Write-Host "All files updated successfully!"
