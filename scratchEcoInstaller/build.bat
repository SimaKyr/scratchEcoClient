:: windres resource.rc resource.o
taskkill /im scratcheco.exe /f
C:\TDM-GCC-64\bin\x86_64-w64-mingw32-g++.exe -mwindows -o scratcheco.exe scratcheco.cpp resource.o
timeout 2
scratcheco.exe