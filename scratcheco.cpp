#include <iostream>
using namespace std;

int main() 
{
	system("start /I chrome --app=https://scratch.mit.edu --user-data-dir=ud --load-extension=%cd%/extension");
    return 0;
}