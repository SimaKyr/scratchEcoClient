if(document.querySelector("[rel='shortcut icon']")!=null){document.querySelector("[rel='shortcut icon']").remove()}
x=document.createElement('script');x.src='//simakyr.github.io/scratchEco/scratchEco.user.js'; document.getElementsByTagName('head')[0].appendChild(x);
var a;
a=document.createElement('link');
a.rel='shortcut icon';
a.type='image/png';
a.href='//simakyr.github.io/scratchEco/icons/icon.png';
a.sizes = '256px';
document.getElementsByTagName('head')[0].appendChild(a);
x=document.createElement('script')
x.innerHTML = 'useClient=true;';
document.getElementsByTagName('head')[0].appendChild(x);

