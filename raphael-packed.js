/*
 * Raphael 0.6.1 - JavaScript Vector Library
 *
 * Copyright (c) 2008 Dmitry Baranovskiy (http://raphaeljs.com)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('J 1r=(O(n){J r=O(){11 r.45.2C(r,P)};r.4v="0.6.1";r.1n=n;J q={1v:0,1w:0,1t:"#4z","1t-1F":1,21:\'6V "4D"\',"21-47":\'"4D"\',"21-3x":"16",2D:0,1b:0,1F:1,1e:"48,0",r:0,2S:0,2c:0,26:0,2w:"1 1",1f:"#1P","1f-2I":"","1f-3Y":"3j","1f-49":"3j","1f-4a":0,"1f-1F":1,"1f-17":1,2N:"0 0",17:0,x:0,y:0},3N={1v:"1K",1w:"1K",1t:"3O","1t-1F":"1K","21-3x":"1K",1b:"1K",1F:"1K",1e:"1e",r:"1K",2S:"1K",2c:"1K",26:"1K",2w:"3P",1f:"3O","1f-1F":"1K","1f-17":"1K",2N:"3P",17:"1K",x:"1K",y:"1K"},C={};K(n=="3r"){J u=O(i,j,l){J g=1h.1C("1y:2e"),34=g.1s;34.2A="2B";34.22=0;34.1B=0;34.17=l.17+"1G";34.1b=l.1b+"1G";J m=1h.1C("1y:2K"),3b=m.1s;3b.17=l.17+"1G";3b.1b=l.1b+"1G";m.1e="";K(i["4N"]){m.66=i["4N"]}m.3s=9.3s;m.3v=9.3v;g.1j(m);l.1i.1j(g);J p=1H A(m,g,l);p.18=1V;p.1n="1e";p.1e=[];p.13={x:0,y:0,1S:0,1M:0,18:1V};p.2x="";p.3f=O(){9.18=1V;11 9};p.3J=O(){9.18=31;11 9};p.3g=O(x,y){J d=9.18?"m":"t";d+=15.1c(19(x,10))+" "+15.1c(19(y,10));9.1O.1e=9.2x+=d;9.13.x=(9.18?0:9.13.x)+19(x,10);9.13.y=(9.18?0:9.13.y)+19(y,10);9.13.18=9.18;9.N.1e+=(9.18?"M":"m")+[x,y];11 9};p.25=O(x,y){J d=9.18?"l":"r";d+=15.1c(19(x,10))+" "+15.1c(19(y,10));9[0].1e=9.2x+=d;9.13.x=(9.18?0:9.13.x)+19(x,10);9.13.y=(9.18?0:9.13.y)+19(y,10);9.13.18=9.18;9.N.1e+=(9.18?"L":"l")+[x,y];11 9};p.4l=O(a,b,c,e,f,g){f=(9.18?0:9.13.x)+f;g=(9.18?0:9.13.y)+g;J h=9.13.x,3k=9.13.y,x=(h-f)/2,y=(3k-g)/2,k=(c==e?-1:1)*15.5s(15.4o(a*a*b*b-a*a*y*y-b*b*x*x)/(a*a*y*y+b*b*x*x)),1v=k*a*y/b+(h+f)/2,1w=k*-b*x/a+(3k+g)/2,d=e?(9.18?"5r":"5q"):(9.18?"5p":"5o"),22=15.1c(1v-a),1B=15.1c(1w-b);d+=[22,1B,15.1c(22+a*2),15.1c(1B+b*2),15.1c(h),15.1c(3k),15.1c(19(f,10)),15.1c(19(g,10))].1z(", ");9.1O.1e=9.2x+=d;9.13.x=(9.18?0:9.13.x)+19(f,10);9.13.y=(9.18?0:9.13.y)+19(g,10);9.13.18=9.18;9.N.1e+=(9.18?"A":"a")+[a,b,0,c,e,f,g];11 9};p.5d=O(a,b,c){K(!c){11 9.25(a,b)}1k{J x=15.1c(15.1c(19(a,10)*2p)/2p),y=15.1c(15.1c(19(b,10)*2p)/2p),w=15.1c(15.1c(19(c,10)*2p)/2p),d=9.18?"c":"v",1p=[15.1c(9.13.x)+w,15.1c(9.13.y),x-w,y,x,y],5e=[9.13.x+c,9.13.y,a-c,b,a,b];d+=1p.1z(" ")+" ";9.13.x=(9.18?0:9.13.x)+1p[4];9.13.y=(9.18?0:9.13.y)+1p[5];9.13.1S=1p[2];9.13.1M=1p[3];9.1O.1e=9.2x+=d;9.N.1e+=(9.18?"C":"c")+5e;11 9}};p.1J=O(){J d=9.18?"c":"v";K(P.14==6){9.13.1S=(9.18?0:9.13.x)+19(P[2],10);9.13.1M=(9.18?0:9.13.y)+19(P[3],10);9.13.x=(9.18?0:9.13.x)+19(P[4],10);9.13.y=(9.18?0:9.13.y)+19(P[5],10);d+=[15.1c(19(P[0],10)),15.1c(19(P[1],10)),15.1c(19(P[2],10)),15.1c(19(P[3],10)),15.1c(19(P[4],10)),15.1c(19(P[5],10))].1z(" ")+" ";9.13.18=9.18;9.N.1e+=(9.18?"C":"c")+3e.1u.2v.30(P,0,P.14)}K(P.14==4){J a=9.13.x*2-9.13.1S;J b=9.13.y*2-9.13.1M;9.13.1S=(9.18?0:9.13.x)+19(P[0],10);9.13.1M=(9.18?0:9.13.y)+19(P[1],10);9.13.x=(9.18?0:9.13.x)+19(P[2],10);9.13.y=(9.18?0:9.13.y)+19(P[3],10);d+=[15.1c(a),15.1c(b),15.1c(19(P[0],10)),15.1c(19(P[1],10)),15.1c(19(P[2],10)),15.1c(19(P[3],10))].1z(" ")+" ";9.N.1e+=(9.18?"S":"s")+3e.1u.2v.30(P,0,P.14)}9.1O.1e=9.2x+=d;11 9};p.3Z=O(){J d="5N";K(P.14==4){9.13.36=(9.18?0:9.13.x)+19(P[0],10);9.13.35=(9.18?0:9.13.y)+19(P[1],10);9.13.x=(9.18?0:9.13.x)+19(P[2],10);9.13.y=(9.18?0:9.13.y)+19(P[3],10);d+=[15.1c(9.13.36),15.1c(9.13.35),15.1c(9.13.x),15.1c(9.13.y)].1z(" ")+" ";9.13.18=9.18;9.N.1e+=(9.18?"Q":"q")+3e.1u.2v.30(P,0,P.14)}K(P.14==2){9.13.36=9.13.x*2-9.13.36;9.13.35=9.13.y*2-9.13.35;9.13.x=(9.18?0:9.13.x)+19(P[2],10);9.13.y=(9.18?0:9.13.y)+19(P[3],10);d+=[15.1c(9.13.36),15.1c(9.13.35),15.1c(9.13.x),15.1c(9.13.y)].1z(" ")+" ";9.N.1e+=(9.18?"T":"t")+3e.1u.2v.30(P,0,P.14)}9.1O.1e=9.2x+=d;9.1e.2j({1n:"5Z",60:[].62.30(P,0),63:9.18});11 9};p.4R=O(r,a){J R=.4P*r,2q=9.18,o=9;K(2q){9.3J();2q=O(){o.3f()}}1k{2q=O(){}}J b={l:O(){11{u:O(){o.1J(-R,0,-r,-(r-R),-r,-r)},d:O(){o.1J(-R,0,-r,r-R,-r,r)}}},r:O(){11{u:O(){o.1J(R,0,r,-(r-R),r,-r)},d:O(){o.1J(R,0,r,r-R,r,r)}}},u:O(){11{r:O(){o.1J(0,-R,-(R-r),-r,r,-r)},l:O(){o.1J(0,-R,R-r,-r,-r,-r)}}},d:O(){11{r:O(){o.1J(0,R,-(R-r),r,r,r)},l:O(){o.1J(0,R,R-r,r,-r,r)}}}};b[a.3S(0)]()[a.3S(1)]();2q();11 o};p.4q=O(){9.1O.1e=(9.2x+="x e");9.N.1e+="z";11 9};K(1q j=="28"){p.3f();p.N.1e="";C.3A(p,j)}p.2H();v(p,i);K(i.2D){z(p,i.2D)}11 p};J v=O(o,a){J s=o[0].1s;o.N=o.N||{};1l(J b 1A a){o.N[b]=a[b]}K(a.1e&&o.1n=="1e"){o.2x="";o.1e=[];C.3A(o,a.1e)}K(a.2S!=6U){o.1U.1s.2S=a.2S}K(a.2N){J c=a.2N.2u(/[, ]+/);o.2Z(c[0],c[1])}K(a.2w){J c=a.2w.2u(/[, ]+/);o.2w(c[0],c[1])}a["21-47"]&&(s.6X=a["21-47"]);a["21-3x"]&&(s.70=a["21-3x"]);a["21"]&&(s.21=a["21"]);a["21-41"]&&(s.72=a["21-41"]);K(1q a.1F!="1L"||1q a["1f-17"]!="1L"||1q a.1t!="1L"||1q a.1f!="1L"){o=o.2K||o.1O;J d=(o.3y("1t")&&o.3y("1t")[0])||1h.1C("1y:1t");K("1t-1F"1A a||"1F"1A a){d.1F=((a["1t-1F"]+1||2)-1)*((a.1F+1||2)-1)}K(a.1t){d.2o=1V}K(d.2o==1L||a.1t=="1Z"){d.2o=31}K(d.2o&&a.1t){J e=a.1t.4s(/^3a\\(([^\\)]+)\\)$/i);K(e){d.3T=e[1];d.1n="6y"}1k{d.2r=a.1t;d.3T="";d.1n="6e"}}o.1j(d);J f=(o.3y("1f")&&o.3y("1f")[0])||1h.1C("1y:1f");K((a.1f&&a.1f!="1Z")||a["1f-17"]||a["1f-1F"]||a["1f-2I"]){f.2o=1V}K(a.1f=="1Z"||1q f.2o=="1L"){f.2o=31}K(f.2o&&a.1f){f.2r=a.1f}f.1F=((a["1f-1F"]+1||2)-1)*((a.1F+1||2)-1);a["1f-49"]&&(f.64=a["1f-49"]||"4W");f.4a=a["1f-4a"]||8;a["1f-3Y"]&&(f.5S={3j:"5M",4p:"4p",1c:"1c"}[a["1f-3Y"]]||"4W");a["1f-17"]&&(f.41=(19(a["1f-17"],10)||1)*12/16);K(a["1f-2I"]){J g={"-":"5x",".":"5A","-.":"5C","-..":"5G",". ":"5H","- ":"5T","--":"5U","- .":"6b","--.":"6c","--..":"6d"};f.6u=g[a["1f-2I"]]||""}o.1j(f)}};J z=O(o,a){o.N=o.N||{};o.N.2D=a;o=o.2K||o[0];J b=o.3y("1t");K(b.14){b=b[0]}1k{b=1h.1C("1y:1t")}K(a.1I.14){b.2o=1V;b.5f="1Z";b.1n=(a.1n.2T()=="6D")?"2D":"6N";K(1q a.1I[0].2r!="1L"){b.2r=a.1I[0].2r||"#1P"}K(1q a.1I[a.1I.14-1].2r!="1L"){b.6T=a.1I[a.1I.14-1].2r||"#1P"}J c=[];1l(J i=0,1o=a.1I.14;i<1o;i++){K(a.1I[i].3p){c.2j(a.1I[i].3p+" "+a.1I[i].2r)}};J d=a.1I[0].1F||1;J e=a.1I[a.1I.14-1].1F||1;K(c){b.7a.7b=c.1z(",");e+=d;d=e-d;e-=d}b.1a("1F",d);b.1a("71",e);K(a.2f){J f=15.1c(15.7d((19(a.2f[3],10)-19(a.2f[1],10))/(19(a.2f[2],10)-19(a.2f[0],10)))*57.29)||0;b.6C=6x-f}K(a.1n.2T()=="5Y"){b.6v="2p%";b.74="0.5 0.5"}}};J A=O(a,b,c){J d=0,78=0,5J=0,7c=1;9[0]=a;9.1O=a;9.X=0;9.Y=0;9.N={};9.1U=b;9.1X=c;9.1m={2U:0,2W:0,2g:0,2z:1,2G:1}};A.1u.3H=O(a,b){K(a==1L){11 9.1m.2g}K(b){9.1m.2g=a}1k{9.1m.2g+=a}9.1U.1s.2S=9.1m.2g;11 9};A.1u.2H=O(a){J b=9.1U.1s,2J=9[0].1s;1l(J i 1A a){9.N[i]=a[i]}J c=9.N,x,y,w,h;2b(9.1n){1d"2O":x=c.1v-c.r;y=c.1w-c.r;w=h=c.r*2;1g;1d"32":x=c.1v-c.2c;y=c.1w-c.26;w=c.2c*2;h=c.26*2;1g;1d"2h":1d"2y":x=c.x;y=c.y;w=c.17||0;h=c.1b||0;1g;1d"2d":9.4r.v=["m",15.1c(c.x),", ",15.1c(c.y-2),"l",15.1c(c.x)+1,", ",15.1c(c.y-2)].1z("");11;1d"1e":K(!9.N.1e){x=y=w=h=0}1k{J d=1r.3K(9.N.1e),x=d.x;y=d.y;w=d.17;h=d.1b}1g;2F:x=0;y=0;w=9.1X.17;h=9.1X.1b;1g}K(9.1n=="1e"){J e=15.1c(9.1X.17/2-w/2-x),1B=15.1c(9.1X.1b/2-h/2-y);b.22=-e+"1G";b.1B=-1B+"1G";9.X=e;9.Y=1B;9.W=w;9.H=h;2J.1B=1B+"1G";2J.22=e+"1G"}1k{J e=9.1X.17/2-w/2,1B=9.1X.1b/2-h/2;b.2A="2B";b.22=x-e+"1G";b.1B=y-1B+"1G";9.X=x-e;9.Y=y-1B;9.W=w;9.H=h;b.17=9.1X.17+"1G";b.1b=9.1X.1b+"1G";2J.2A="2B";2J.1B=1B+"1G";2J.22=e+"1G";2J.17=w+"1G";2J.1b=h+"1G"}};A.1u.4A=O(){9.1U.1s.3Q="1Z";11 9};A.1u.4B=O(){9.1U.1s.3Q="4C";11 9};A.1u.2Z=O(x,y){K(x==1L&&y==1L){11{x:9.1m.2U,y:9.1m.2W}}9.1m.2U+=+x;9.1m.2W+=+y;K(9.1n=="1e"){J a=9.N.1e;a=1r.3l(a);a[0][1]+=+x;a[0][2]+=+y;9.1p({1e:a.1z(" ")})}9.2H({x:9.1m.2U,y:9.1m.2W});11 9};A.1u.3o=O(){11{x:9.X,y:9.Y,17:9.W,1b:9.H}};A.1u.3n=O(){9[0].1Q.2s(9[0]);9.1U.1Q.2s(9.1U);9.2K&&9.2K.1Q.2s(9.2K)};A.1u.1p=O(){K(P.14==1&&1q P[0]=="28"){11 9.N[P[0]]}K(9.N&&P.14==1&&P[0]4E 3e){J a={};1l(J i=0,1o=P[0].14;i<1o;i++){a[P[0][i]]=9.N[P[0][i]]};11 a}K(9[0].6F.2T()=="2e"){J b=9[0].3m;9.N=9.N||{};K(P.14==2){9.N[P[0]]=P[1]}1k K(P.14==1||1q P[0]=="2Q"){1l(J j 1A P[0]){9.N[j]=P[0][j]}}1l(J i=0,1o=b.14;i<1o;i++){9.1p.2C(1H 6B(b[i],9[0],9.1X),P)}}1k{J c;K(P.14==2){c={};c[P[0]]=P[1]}K(P.14==1&&1q P[0]=="2Q"){c=P[0]}K(c){v(9,c);9.2H(c);K(c.2D){z(9,c.2D)}K(c.2d&&9.1n=="2d"){9[0].28=c.2d}K(c.2L){9[0].2L=c.2L}}}11 9};A.1u.4H=O(){9.1U.1Q.1j(9.1U);11 9};A.1u.4I=O(){K(9.1U.1Q.2i!=9.1U){9.1U.1Q.3L(9.1U,9.1U.1Q.2i)}11 9};J B=O(a,x,y,r){J g=1h.1C("1y:2e");J o=1h.1C("1y:4K");g.1j(o);a.1i.1j(g);J b=1H A(o,g,a);v(b,{1f:"#1P",1t:"1Z"});b.2H({x:x-r,y:y-r,17:r*2,1b:r*2});b.N.1v=x;b.N.1w=y;b.N.r=r;b.1n="2O";11 b};J D=O(a,x,y,w,h,r){J g=1h.1C("1y:2e");J o=1h.1C(r?"1y:67":"1y:2h");K(r){o.65=r/(15.33(w,h))}g.1j(o);a.1i.1j(g);J b=1H A(o,g,a);v(b,{1f:"#1P"});b.2H({x:x,y:y,17:w,1b:h});b.N.x=x;b.N.y=y;b.N.w=w;b.N.h=h;b.N.r=r;b.1n="2h";11 b};J E=O(a,x,y,b,c){J g=1h.1C("1y:2e");J o=1h.1C("1y:4K");g.1j(o);a.1i.1j(g);J d=1H A(o,g,a);v(d,{1f:"#1P"});d.2H({x:x-b,y:y-c,17:b*2,1b:c*2});d.N.1v=x;d.N.1w=y;d.N.2c=b;d.N.26=c;d.1n="32";11 d};J F=O(a,b,x,y,w,h){J g=1h.1C("1y:2e");J o=1h.1C("1y:2y");o.3T=b;g.1j(o);a.1i.1j(g);J c=1H A(o,g,a);c.1n="2y";c.2H({x:x,y:y,17:w,1b:h});c.N.x=x;c.N.y=y;c.N.w=w;c.N.h=h;11 c};J G=O(a,x,y,b){J g=1h.1C("1y:2e"),3i=g.1s;J c=1h.1C("1y:2K"),3b=c.1s;J d=1h.1C("1y:1e"),5R=d.1s;d.v=["m",15.1c(x),", ",15.1c(y-2),"l",15.1c(x)+1,", ",15.1c(y-2)].1z("");d.5P=1V;3b.17=a.17;3b.1b=a.1b;3i.2A="2B";3i.22=0;3i.1B=0;3i.17=a.17;3i.1b=a.1b;J o=1h.1C("1y:4r");o.28=b;o.2o=1V;o.3s=a.3s;o.3v=a.3v;c.1j(o);c.1j(d);g.1j(c);a.1i.1j(g);J e=1H A(o,g,a);e.2K=c;e.4r=d;e.1n="2d";e.N.x=x;e.N.y=y;e.N.w=1;e.N.h=1;v(e,{1f:"1Z",1t:"#1P"});11 e};J H=O(a){J b=1h.1C("1y:2e"),38=b.1s;38.2A="2B";38.22=0;38.1B=0;38.17=a.17;38.1b=a.1b;K(a.1i){a.1i.1j(b)}J c=1H A(b,b,a);1l(J f 1A a){K(f.3S(0)!="1m"&&1q a[f]=="O"){c[f]=(O(f){11 O(){J e=a[f].2C(a,P);b.1j(e[0].1Q);11 e}})(f)}}c.1n="2e";11 c};r.45=O(){J d,17,1b;K(1q P[0]=="28"){d=1h.52(P[0]);17=P[1];1b=P[2]}K(1q P[0]=="2Q"){d=P[0];17=P[1];1b=P[2]}K(1q P[0]=="1K"){d=1;x=P[0];y=P[1];17=P[2];1b=P[3]}K(!d){53 1H 56("3r 58 59 5a.");}K(!1h.4t["1y"]){1h.4t.5z("1y","5m:5g-6z-5h:1X");1h.5i().5j("1y\\\\:*","5k:3a(#2F#3r)")}J c=1h.1C("5l"),r=C.1i=1h.1C("1y:2e"),2n=c.1s,3t=r.1s;C.17=17;C.1b=1b;17=17||"5n";1b=1b||"5t";2n.5u="2h(0 "+17+" "+1b+" 0)";2n.2A="2B";3t.17=17;3t.1b=1b;r.3s=(17=="2p%"?17:19(17))+" "+(1b=="2p%"?1b:19(1b));r.3v="0 0";J b=1h.1C("1y:2h"),3q=b.1s;3q.22=3q.1B=0;3q.17=3t.17;3q.1b=3t.1b;b.5v=b.5w="f";r.1j(b);c.1j(r);K(d==1){1h.40.1j(c);2n.2A="2B";2n.22=x+"1G";2n.1B=y+"1G";2n.17=17;2n.1b=1b;d={1s:{17:17,1b:1b}}}1k{2n.17=d.1s.17=17;2n.1b=d.1s.1b=1b;K(d.2i){d.3L(c,d.2i)}1k{d.1j(c)}}1l(J e 1A C){d[e]=C[e]}d.4n=O(){J a=[];1l(J i=0,1o=r.3m.14;i<1o;i++){K(r.3m[i]!=b){a.2j(r.3m[i])}}1l(i=0,1o=a.14;i<1o;i++){r.2s(a[i])}};11 d};C.3n=O(){C.1i.1Q.1Q.2s(C.1i.1Q)}}K(n=="3h"){J u=O(g,h,j){J k=1h.24(j.23,"1e");k.1a("1t","1Z");K(j.1i){j.1i.1j(k)}J p=1H A(k,j);p.18=1V;p.1n="1e";p.13={x:0,y:0,1S:0,1M:0};p.3f=O(){9.18=1V;11 9};p.3J=O(){9.18=31;11 9};p.3g=O(x,y){J d=9.18?"M":"m";d+=19(x,10).1N(3)+" "+19(y,10).1N(3)+" ";J a=9[0].2X("d")||"";(a=="48,0")&&(a="");9[0].1a("d",a+d);9.13.x=(9.18?0:9.13.x)+19(x,10);9.13.y=(9.18?0:9.13.y)+19(y,10);9.N.1e=a+d;11 9};p.25=O(x,y){9.13.x=(9.18?0:9.13.x)+19(x,10);9.13.y=(9.18?0:9.13.y)+19(y,10);J d=9.18?"L":"l";d+=19(x,10).1N(3)+" "+19(y,10).1N(3)+" ";J a=9[0].2X("d")||"";9[0].1a("d",a+d);9.N.1e=a+d;11 9};p.4l=O(a,b,c,e,x,y){J d=9.18?"A":"a";d+=[19(a,10).1N(3),19(b,10).1N(3),0,c,e,19(x,10).1N(3),19(y,10).1N(3)].1z(" ");J f=9[0].2X("d")||"";9[0].1a("d",f+d);9.13.x=19(x,10);9.13.y=19(y,10);9.N.1e=f+d;11 9};p.5d=O(a,b,c){K(!c){11 9.25(a,b)}1k{J p={};J x=19(a,10);J y=19(b,10);J w=19(c,10);J d=9.18?"C":"c";J e=[+9.13.x+w,+9.13.y,x-w,y,x,y];1l(J i=0,1o=e.14;i<1o;i++){d+=e[i].1N(3)+" "}9.13.x=(9.18?0:9.13.x)+e[4];9.13.y=(9.18?0:9.13.y)+e[5];9.13.1S=e[2];9.13.1M=e[3];J f=9[0].2X("d")||"";9[0].1a("d",f+d);9.N.1e=f+d;11 9}};p.1J=O(){J p={},3U=[0,1,2,3,"s",5,"c"];J d=3U[P.14];K(9.18){d=d.2Y()}1l(J i=0,1o=P.14;i<1o;i++){d+=19(P[i],10).1N(3)+" "}9.13.x=(9.18?0:9.13.x)+19(P[P.14-2],10);9.13.y=(9.18?0:9.13.y)+19(P[P.14-1],10);9.13.1S=19(P[P.14-4],10);9.13.1M=19(P[P.14-3],10);J a=9.1O.2X("d")||"";9.1O.1a("d",a+d);9.N.1e=a+d;11 9};p.3Z=O(){J p={},3U=[0,1,"t",3,"q"];J d=3U[P.14];K(9.18){d=d.2Y()}1l(J i=0,1o=P.14;i<1o;i++){d+=19(P[i],10).1N(3)+" "}9.13.x=(9.18?0:9.13.x)+19(P[P.14-2],10);9.13.y=(9.18?0:9.13.y)+19(P[P.14-1],10);K(P.14!=2){9.13.36=19(P[P.14-4],10);9.13.35=19(P[P.14-3],10)}J a=9.1O.2X("d")||"";9.1O.1a("d",a+d);9.N.1e=a+d;11 9};p.4R=O(r,a){J R=.4P*r,2q=9.18,o=9;K(2q){9.3J();2q=O(){o.3f()}}1k{2q=O(){}}J b={l:O(){11{u:O(){o.1J(-R,0,-r,-(r-R),-r,-r)},d:O(){o.1J(-R,0,-r,r-R,-r,r)}}},r:O(){11{u:O(){o.1J(R,0,r,-(r-R),r,-r)},d:O(){o.1J(R,0,r,r-R,r,r)}}},u:O(){11{r:O(){o.1J(0,-R,-(R-r),-r,r,-r)},l:O(){o.1J(0,-R,R-r,-r,-r,-r)}}},d:O(){11{r:O(){o.1J(0,R,-(R-r),r,r,r)},l:O(){o.1J(0,R,R-r,r,-r,r)}}}};b[a[0]]()[a[1]]();2q();11 o};p.4q=O(){J a=9[0].2X("d")||"";9[0].1a("d",a+"Z ");9.N.1e=a+"Z ";11 9};K(1q h=="28"){p.N.1e=h;p.3f();C.3A(p,h)}K(g){v(p,g)}11 p};J z=O(o,a,b){J c=1h.24(b.23,a.1n+"5y");c.2L="5c-2D-"+b.4m++;K(a.2f&&a.2f.14){c.1a("5B",a.2f[0]);c.1a("3k",a.2f[1]);c.1a("5D",a.2f[2]);c.1a("5E",a.2f[3])}b.3z.1j(c);1l(J i=0,1o=a.1I.14;i<1o;i++){J d=1h.24(b.23,"3I");d.1a("3p",a.1I[i].3p?a.1I[i].3p:(i==0)?"0%":"2p%");d.1a("3I-2r",a.1I[i].2r||"#4z");K(1q a.1I[i].1F!="1L"){d.1a("3I-1F",a.1I[i].1F)}c.1j(d)};o.1a("1t","3a(#"+c.2L+")")};J I=O(o){K(o.3B){J a=o.1O.3o();o.3B.1a("5F","2Z("+[a.x,a.y].1z(",")+")")}};J v=O(o,c){J d={"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},4k=O(o,a){a=d[a.2M().2T()];K(a){J b=o.N["1f-17"]||"1",3j={1c:b,4p:b,3j:0}[o.N["1f-3Y"]]||0,4j=[];1l(J i=0,1o=a.14;i<1o;i++){4j.2j(a[i]*b+((i%2)?1:-1)*3j)}a=4j.1z(",");o[0].1a("1f-2I",a)}};1l(J e 1A c){J f=c[e];o.N[e]=f;2b(e){1d"1e":K(o.1n=="1e"){o[0].1a("d","48,0");C.3A(o,f)}1d"2c":1d"1v":1d"x":o[0].1a(e,f);I(o);1g;1d"26":1d"1w":1d"y":o[0].1a(e,f);I(o);1g;1d"17":o[0].1a(e,f);1g;1d"1b":o[0].1a(e,f);1g;1d"2D":z(o[0],f,o.2k);1g;1d"1f-17":o[0].1s.5I=f;o[0].1a(e,f);K(o.N["1f-2I"]){4k(o,o.N["1f-2I"])}1g;1d"1f-2I":4k(o,f);1g;1d"2d":K(o.1n=="2d"){o[0].3m.14&&o[0].2s(o[0].2i);o[0].1j(1h.5b(f))}1g;1d"2S":o.3H(f,1V);1g;1d"2N":J g=f.2u(/[, ]+/);o.2Z(g[0],g[1]);1g;1d"2w":J g=f.2u(/[, ]+/);o.2w(g[0],g[1]);1g;1d"1t":J h=f.4s(/^3a\\(([^\\)]+)\\)$/i);K(h){J j=1h.24(o.2k.23,"3B");J k=1h.24(o.2k.23,"2y");j.2L="5c-3B-"+o.2k.4m++;j.1a("x",0);j.1a("y",0);j.1a("5K","5L");k.1a("x",0);k.1a("y",0);k.54(o.2k.3G,"51",h[1]);j.1j(k);J l=1h.1C("5O");l.1s.2A="2B";l.1s.1B="-50";l.1s.22="-50";l.5Q=O(){j.1a("17",9.4Z);j.1a("1b",9.4Y);k.1a("17",9.4Z);k.1a("1b",9.4Y);1h.40.2s(9);C.3d()};1h.40.1j(l);l.3T=h[1];o.2k.3z.1j(j);o[0].1s.1t="3a(#"+j.2L+")";o[0].1a("1t","3a(#"+j.2L+")");o.3B=j;I(o);1g}2F:J m=e.4i(/(\\-.)/g,O(w){11 w.1T(1).2Y()});o[0].1s[m]=f;o[0].1a(e,f);1g}}};J A=O(a,b){J X=0,Y=0;9[0]=a;9.1O=a;9.2k=b;9.N=9.N||{};9.2t=[];9.1m={2U:0,2W:0,2g:{3c:0,x:0,y:0},2z:1,2G:1}};A.1u.2Z=O(x,y){K(x==1L&&y==1L){11{x:9.1m.2U,y:9.1m.2W}}9.1m.2U+=+x;9.1m.2W+=+y;2b(9.1n){1d"2O":1d"32":9.1p({1v:9.N.1v+x,1w:9.N.1w+y});1g;1d"2h":1d"2y":1d"2d":9.1p({x:9.N.x+x,y:9.N.y+y});1g;1d"1e":J a=1r.3l(9.N.1e);a[0][1]+=+x;a[0][2]+=+y;9.1p({1e:a.1z(" ")});1g}11 9};A.1u.3H=O(a,b){K(a==1L){11 9.1m.2g.3c}J c=9.3o();K(b){9.1m.2g.3c=a}1k{9.1m.2g.3c+=a}K(9.1m.2g.3c){9.2t[0]=("3H("+9.1m.2g.3c+" "+(c.x+c.17/2)+" "+(c.y+c.1b/2)+")")}1k{9.2t[0]=""}9[0].1a("4h",9.2t.1z(" "));11 9};A.1u.4A=O(){9[0].1s.3Q="1Z";11 9};A.1u.4B=O(){9[0].1s.3Q="4C";11 9};A.1u.3n=O(){9[0].1Q.2s(9[0])};A.1u.3o=O(){11 9[0].3o()};A.1u.1p=O(){K(P.14==1&&1q P[0]=="28"){K(P[0]=="2N"){11 9.2Z()}11 9.N[P[0]]}K(P.14==1&&P[0]4E 3e){J a={};1l(J j 1A P[0]){a[P[0][j]]=9.N[P[0][j]]}11 a}K(P.14==2){J b={};b[P[0]]=P[1];v(9,b)}1k K(P.14==1&&1q P[0]=="2Q"){v(9,P[0])}11 9};A.1u.4H=O(){9[0].1Q.1j(9[0]);11 9};A.1u.4I=O(){K(9[0].1Q.2i!=9[0]){9[0].1Q.3L(9[0],9[0].1Q.2i)}11 9};J B=O(a,x,y,r){J b=1h.24(a.23,"2O");b.1a("1v",x);b.1a("1w",y);b.1a("r",r);b.1a("1t","1Z");b.1a("1f","#1P");K(a.1i){a.1i.1j(b)}J c=1H A(b,a);c.N=c.N||{};c.N.1v=x;c.N.1w=y;c.N.r=r;c.N.1f="#1P";c.1n="2O";11 c};J D=O(a,x,y,w,h,r){J b=1h.24(a.23,"2h");b.1a("x",x);b.1a("y",y);b.1a("17",w);b.1a("1b",h);K(r){b.1a("2c",r);b.1a("26",r)}b.1a("1t","1Z");b.1a("1f","#1P");K(a.1i){a.1i.1j(b)}J c=1H A(b,a);c.N=c.N||{};c.N.x=x;c.N.y=y;c.N.17=w;c.N.1b=h;c.N.1f="#1P";K(r){c.N.2c=c.N.26=r}c.1n="2h";11 c};J E=O(a,x,y,b,c){J d=1h.24(a.23,"32");d.1a("1v",x);d.1a("1w",y);d.1a("2c",b);d.1a("26",c);d.1a("1t","1Z");d.1a("1f","#1P");K(a.1i){a.1i.1j(d)}J e=1H A(d,a);e.N=e.N||{};e.N.1v=x;e.N.1w=y;e.N.2c=b;e.N.26=c;e.N.1f="#1P";e.1n="32";11 e};J F=O(a,b,x,y,w,h){J c=1h.24(a.23,"2y");c.1a("x",x);c.1a("y",y);c.1a("17",w);c.1a("1b",h);c.1a("5V","1Z");c.54(a.3G,"51",b);K(a.1i){a.1i.1j(c)}J d=1H A(c,a);d.N=d.N||{};d.N.x=x;d.N.y=y;d.N.17=w;d.N.1b=h;d.1n="2y";11 d};J G=O(a,x,y,b){J c=1h.24(a.23,"2d");c.1a("x",x);c.1a("y",y);c.1a("2d-5W","5X");c.1a("1t","#1P");K(b){c.1j(1h.5b(b))}K(a.1i){a.1i.1j(c)}J d=1H A(c,a);d.N=d.N||{};d.N.x=x;d.N.y=y;d.N.1t="#1P";d.1n="2d";11 d};J H=O(a){J b=1h.24(a.23,"g");K(a.1i){a.1i.1j(b)}J i=1H A(b,a);1l(J f 1A a){K(f[0]!="1m"&&1q a[f]=="O"){i[f]=(O(f){11 O(){J e=a[f].2C(a,P);b.1j(e[0]);11 e}})(f)}}i.1n="2e";11 i};r.45=O(){K(1q P[0]=="28"){J a=1h.52(P[0]);J b=P[1];J c=P[2]}K(1q P[0]=="2Q"){J a=P[0];J b=P[1];J c=P[2]}K(1q P[0]=="1K"){J a=1,x=P[0],y=P[1],b=P[2],c=P[3]}K(!a){53 1H 56("3h 58 59 5a.");}C.1i=1h.24(C.23,"2k");C.1i.1a("17",b||4X);C.17=b||4X;C.1i.1a("1b",c||4V);C.1b=c||4V;K(a==1){1h.40.1j(C.1i);C.1i.1s.2A="2B";C.1i.1s.22=x+"1G";C.1i.1s.1B=y+"1G"}1k{K(a.2i){a.3L(C.1i,a.2i)}1k{a.1j(C.1i)}}a={1i:C.1i,4n:O(){4U(9.1i.2i){9.1i.2s(9.1i.2i)}9.3z=1h.24(C.23,"3z");9.4m=0;9.1i.1j(9.3z)}};1l(J d 1A C){K(d!="61"){a[d]=C[d]}}a.4n();11 a};C.3n=O(){C.1i.1Q.2s(C.1i)};C.23="4T://4S.4Q.4O/68/2k";C.3G="4T://4S.4Q.4O/69/3G"}K(n=="3r"||n=="3h"){C.2O=O(x,y,r){11 B(9,x,y,r)};C.2h=O(x,y,w,h,r){11 D(9,x,y,w,h,r)};C.32=O(x,y,a,b){11 E(9,x,y,a,b)};C.1e=O(a,b){11 u(a,b,9)};C.2y=O(a,x,y,w,h){11 F(9,a,x,y,w,h)};C.2d=O(x,y,a){11 G(9,x,y,a)};C.2e=O(){11 H(9)};C.6a=O(x,y,w,h,a,b,c){c=c||"#1P";J p=9.1e({1f:c,"1f-17":1}).3g(x,y).25(x+w,y).25(x+w,y+h).25(x,y+h).25(x,y),4g=h/b,4f=w/a;1l(J i=1;i<b;i++){p.3g(x,y+i*4g).25(x+w,y+i*4g)}1l(J i=1;i<a;i++){p.3g(x+i*4f,y).25(x+i*4f,y+h)}11 p};C.3d=O(){K(r.1n=="3h"){J a=C.2h(-C.17,-C.1b,C.17*3,C.1b*3).1p({1f:"1Z"});4e(O(){a.3n()},0)}};A.1u.3I=O(){3V(9.39)};A.1u.2w=O(x,y){K(x==1L&&y==1L){11{x:9.1m.2z,y:9.1m.2G}}y=y||x;J a,2V,1v,1w;K(x!=0&&!(x==1&&y==1)){J b=15.1c(x/15.4o(x)),27=15.1c(y/15.4o(y)),s=9.1O.1s;a=9.1p("x");2V=9.1p("y");1v=9.1p("1v");1w=9.1p("1w");K(b!=1||27!=1){K(9.2t){9.2t[2]="2w("+[b,27]+")";9.1O.1a("4h",9.2t.1z(" "));a=(b<0)?-9.1p("x")-9.N.17*x*b/9.1m.2z:9.1p("x");2V=(27<0)?-9.1p("y")-9.N.1b*y*27/9.1m.2G:9.1p("y");1v=9.1p("1v")*b;1w=9.1p("1w")*27}1k{s.4M="6f:6g.6h.6i(6j="+b+", 6k=0, 6l=0, 6m="+27+", 6n=0, 6o=0, 6p=\'6q 6r\', 6s=\'6t\')"}}1k{K(9.2t){9.2t[2]="";9.1O.1a("4h",9.2t.1z(" "))}1k{s.4M=""}}2b(9.1n){1d"2h":1d"2y":9.1p({17:9.N.17*x*b/9.1m.2z,1b:9.N.1b*y*27/9.1m.2G,x:a,y:2V});1g;1d"2O":1d"32":9.1p({2c:9.N.2c*x*b/9.1m.2z,26:9.N.26*y*27/9.1m.2G,r:9.N.r*x*27/9.1m.2z,1v:1v,1w:1w});1g;1d"1e":J c=1r.3l(1r.2P(9.1p("1e"))),4d=1V,2R=1r.3K(9.N.1e),a=-2R.17*(x-1)/2,2V=-2R.1b*(y-1)/2;1l(J i=0,1o=c.14;i<1o;i++){K(c[i][0].2Y()=="M"&&4d){4L}1k{4d=31}K(c[i][0].2Y()=="A"){c[i][c[i].14-2]*=x*b;c[i][c[i].14-1]*=y*27}1k{1l(J j=1,1Y=c[i].14;j<1Y;j++){c[i][j]*=(j%2)?x*b/9.1m.2z:y*27/9.1m.2G}}}J d=1r.3K(c),a=2R.x+2R.17/2-d.x-d.17/2,2V=2R.y+2R.1b/2-d.y-d.1b/2;c=1r.3l(c);c[0][1]+=a;c[0][2]+=2V;9.1p({1e:c.1z(" ")})}}9.1m.2z=x;9.1m.2G=y;11 9};A.1u.6w=O(c,d,e){3V(9.39);J f={},2E={},1R={},t={x:0,y:0};1l(J g 1A c){K(g 1A 3N){f[g]=9.1p(g);K(1q f[g]=="1L"){f[g]=q[g]}2E[g]=c[g];2b(3N[g]){1d"1K":1R[g]=(2E[g]-f[g])/d;1g;1d"3O":f[g]=1r.4c(f[g]);J h=1r.4c(2E[g]);1R[g]={r:(h.r-f[g].r)/d,g:(h.g-f[g].g)/d,b:(h.b-f[g].b)/d};1g;1d"1e":J k=1r.4J(f[g],2E[g]);f[g]=k[0];2E[g]=k[1];1R[g]=[];1l(J i=0,1o=f[g].14;i<1o;i++){1R[g][i]=[0];1l(J j=1,1Y=f[g][i].14;j<1Y;j++){1R[g][i][j]=(2E[g][i][j]-f[g][i][j])/d}}1g;1d"3P":J l=c[g].2u(/[, ]+/);K(g=="2N"){f[g]=[0,0];1R[g]=[l[0]/d,l[1]/d]}1k{f[g]=f[g].2u(/[, ]+/);1R[g]=[(l[0]-f[g][0])/d,(l[1]-f[g][0])/d]}2E[g]=l}}}J m=1H 3C(),3F=0,2a=9;(O(){J a=(1H 3C()).3E()-m.3E(),3D={},1W;K(a<d){1l(J b 1A f){2b(3N[b]){1d"1K":1W=+f[b]+a*1R[b];1g;1d"3O":1W="4b("+[15.1c(f[b].r+a*1R[b].r),15.1c(f[b].g+a*1R[b].g),15.1c(f[b].b+a*1R[b].b)].1z(",")+")";1g;1d"1e":1W=[];1l(J i=0,1o=f[b].14;i<1o;i++){1W[i]=[f[b][i][0]];1l(J j=1,1Y=f[b][i].14;j<1Y;j++){1W[i][j]=f[b][i][j]+a*1R[b][i][j]}1W[i]=1W[i].1z(" ")}1W=1W.1z(" ");1g;1d"3P":K(b=="2N"){J x=1R[b][0]*(a-3F),y=1R[b][1]*(a-3F);t.x+=x;t.y+=y;1W=[x,y].1z(" ")}1k{1W=[+f[b][0]+a*1R[b][0],+f[b][1]+a*1R[b][1]].1z(" ")}1g}K(b=="21-3x"){3D[b]=1W+"1G"}1k{3D[b]=1W}}2a.1p(3D);2a.39=4e(P.3w,0);C.3d()}1k{K(t.x||t.y){2a.2Z(-t.x,-t.y)}2a.1p(c);3V(2a.39);C.3d();(1q e=="O")&&e.30(2a)}3F=a})();11 9};A.1u.6A=O(x,y,d,e){3V(9.39);K("1v"1A 9.N||"x"1A 9.N){J f=("1v"1A 9.N),X=9.N.1v||9.N.x,Y=9.N.1w||9.N.y;K(x==X&&y==Y){11 9}J g=y-Y,4G=x-X;J h=1H 3C(),2a=9;(O(){J a=(1H 3C()).3E()-h.3E();K(a<d){J b=X+a*4G/d;J c=Y+a*g/d;2a.1p(f?{1v:b,1w:c}:{x:b,y:c});2a.39=4e(P.3w,1);C.3d()}1k{2a.1p(f?{1v:x,1w:y}:{x:x,y:y});C.3d();e&&e.30(2a)}})()}11 9};C.3A=O(p,g){J h={M:O(x,y){9.3g(x,y)},C:O(a,b,c,d,e,f){9.1J(a,b,c,d,e,f)},Q:O(a,b,c,d){9.3Z(a,b,c,d)},T:O(x,y){9.3Z(x,y)},S:O(a,b,c,d){p.1J(a,b,c,d)},L:O(x,y){p.25(x,y)},H:O(x){9.25(x,9.13.y)},V:O(y){9.25(9.13.x,y)},A:O(a,b,c,d,e,x,y){9.4l(a,b,d,e,x,y)},Z:O(){9.4q()}};g=1r.3u(g);1l(J i=0,1o=g.14;i<1o;i++){J b=g[i].6E();h[b].2C(p,g[i])}};11 r}1k{11 O(){}}})((!4F.6G)?"3r":"3h");1r.1X=!(1r.2k=(1r.1n=="3h"));K(1r.1X&&4F.6H){1r.1n="6I 6J";1r.1X=1r.2k=31}1r.2M=O(){11"6K 6L 6M "+9.1n+".\\6O 6P 6Q "+6R("6S%6W%20")+9.4v};1r.3M=O(a,c,d){K(1q a=="2Q"&&"h"1A a&&"s"1A a&&"b"1A a){d=a.b;c=a.s;a=a.h}J e,1E,1D;K(d==0){11{r:0,g:0,b:0,3R:"#1P"}}1k{J i=15.6Y(a*6),f=(a*6)-i,p=d*(1-c),q=d*(1-(c*f)),t=d*(1-(c*(1-f)));[O(){e=d;1E=t;1D=p},O(){e=q;1E=d;1D=p},O(){e=p;1E=d;1D=t},O(){e=p;1E=q;1D=d},O(){e=t;1E=p;1D=d},O(){e=d;1E=p;1D=q},O(){e=d;1E=t;1D=p}][i]()}J h={r:e,g:1E,b:1D};e*=37;1E*=37;1D*=37;J r=15.1c(e).2M(16);K(r.14==1){r="0"+r}J g=15.1c(1E).2M(16);K(g.14==1){g="0"+g}J b=15.1c(1D).2M(16);K(b.14==1){b="0"+b}h.3R="#"+r+g+b;11 h};1r.6Z=O(a,b,c){K(1q a=="2Q"&&"r"1A a&&"g"1A a&&"b"1A a){c=a.b;b=a.g;a=a.r}K(1q a=="28"&&a.3S(0)=="#"){K(a.14==4){c=1x(a.1T(3),16);b=1x(a.1T(2,3),16);a=1x(a.1T(1,2),16)}1k{c=1x(a.1T(5),16);b=1x(a.1T(3,5),16);a=1x(a.1T(1,3),16)}}K(a>1||b>1||c>1){a/=37;b/=37;c/=37}J d=15.3W(a,b,c),33=15.33(a,b,c),2l,46,4y=d;K(33==d){11{h:0,s:0,b:d}}1k{J e=(d-33);46=e/d;K(a==d){2l=(b-c)/e}1k K(b==d){2l=2+((c-a)/e)}1k{2l=4+((a-b)/e)}2l/=6;K(2l<0){2l+=1}K(2l>1){2l-=1}}11{h:2l,s:46,b:4y}};1r.4c=O(a){J c,1E,1D,d=a.4s(/^\\s*((#[a-f\\d]{6})|(#[a-f\\d]{3})|4b\\(\\s*(\\d+,\\s*\\d+,\\s*\\d+)\\s*\\)|4b\\(\\s*(\\d+%,\\s*\\d+%,\\s*\\d+%)\\s*\\)|4x\\(\\s*(\\d+,\\s*\\d+,\\s*\\d+)\\s*\\)|4x\\(\\s*(\\d+%,\\s*\\d+%,\\s*\\d+%)\\s*\\))\\s*$/i);K(d){K(d[2]){1D=1x(d[2].1T(5),16);1E=1x(d[2].1T(3,5),16);c=1x(d[2].1T(1,3),16)}K(d[3]){1D=1x(d[3].1T(3)+d[3].1T(3),16);1E=1x(d[3].1T(2,3)+d[3].1T(2,3),16);c=1x(d[3].1T(1,2)+d[3].1T(1,2),16)}K(d[4]){d=d[4].2u(/\\s*,\\s*/);c=1x(d[0],10);1E=1x(d[1],10);1D=1x(d[2],10)}K(d[5]){d=d[5].2u(/\\s*,\\s*/);c=1x(d[0],10)*2.55;1E=1x(d[1],10)*2.55;1D=1x(d[2],10)*2.55}K(d[6]){d=d[6].2u(/\\s*,\\s*/);c=1x(d[0],10);1E=1x(d[1],10);1D=1x(d[2],10);11 9.3M(c,1E,1D)}K(d[7]){d=d[7].2u(/\\s*,\\s*/);c=1x(d[0],10)*2.55;1E=1x(d[1],10)*2.55;1D=1x(d[2],10)*2.55;11 9.3M(c,1E,1D)}J d={r:c,g:1E,b:1D};J r=15.1c(c).2M(16);(r.14==1)&&(r="0"+r);J g=15.1c(1E).2M(16);(g.14==1)&&(g="0"+g);J b=15.1c(1D).2M(16);(b.14==1)&&(b="0"+b);d.3R="#"+r+g+b;11 d}};1r.4w=O(a){J b=P.3w.2m=P.3w.2m||{h:0,s:1,b:a||.75};J c=9.3M(b.h,b.s,b.b);b.h+=.73;K(b.h>1){b.h=0;b.s-=.2;K(b.s<=0){P.3w.2m={h:0,s:1,b:b.b}}}11 c.3R};1r.4w.76=O(){9.2m=1L};1r.2P=O(e){J f={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0};J g=[];e.4i(/([77])\\s*((-?\\d*\\.?\\d*\\s*,?\\s*)+)/4u,O(a,b,c){J d=[],3X=b.2T();c.4i(/(-?\\d*\\.?\\d*)\\s*,?\\s*/4u,O(a,b){b&&d.2j(+b)});4U(d.14>=f[3X]){g.2j([b].79(d.2v(0,f[3X])));K(!f[3X]){1g}}});11 g};1r.3K=O(a){J b=a;K(1q a=="28"){b=9.2P(a)}b=9.3u(b);J x=[],y=[],14=0;1l(J i=0,1o=b.14;i<1o;i++){2b(b[i][0]){1d"Z":1g;1d"A":x.2j(b[i][b[i].14-2]);y.2j(b[i][b[i].14-1]);1g;2F:1l(J j=1,1Y=b[i].14;j<1Y;j++){K(j%2){x.2j(b[i][j])}1k{y.2j(b[i][j])}}}}J c=15.33.2C(15,x),44=15.33.2C(15,y);11{x:c,y:44,17:15.3W.2C(15,x)-c,1b:15.3W.2C(15,y)-44,X:x,Y:y}};1r.3l=O(a){J b=[];K(1q a=="28"){a=9.2P(a)}J x=0,y=0,2m=0;K(a[0][0]=="M"){x=a[0][1];y=a[0][2];2m++;b.2j(a[0])}1l(J i=2m,1o=a.14;i<1o;i++){b[i]=[];K(a[i][0]!=a[i][0].2T()){b[i][0]=a[i][0].2T();2b(b[i][0]){1d"a":b[i][1]=a[i][1];b[i][2]=a[i][2];b[i][3]=0;b[i][4]=a[i][4];b[i][5]=a[i][5];b[i][6]=+(a[i][6]-x).1N(3);b[i][7]=+(a[i][7]-y).1N(3);1g;1d"v":b[i][1]=+(a[i][1]-y).1N(3);1g;2F:1l(J j=1,1Y=a[i].14;j<1Y;j++){b[i][j]=+(a[i][j]-((j%2)?x:y)).1N(3)}}}1k{b[i]=a[i]}2b(b[i][0]){1d"z":1g;1d"h":x+=b[i][b[i].14-1];1g;1d"v":y+=b[i][b[i].14-1];1g;2F:x+=b[i][b[i].14-2];y+=b[i][b[i].14-1]}}11 b};1r.3u=O(a){J b=[];K(1q a=="28"){a=9.2P(a)}J x=0,y=0,2m=0;K(a[0][0]=="M"){x=+a[0][1];y=+a[0][2];2m++;b[0]=a[0]}1l(J i=2m,1o=a.14;i<1o;i++){b[i]=[];K(a[i][0]!=a[i][0].2Y()){b[i][0]=a[i][0].2Y();2b(b[i][0]){1d"A":b[i][1]=a[i][1];b[i][2]=a[i][2];b[i][3]=0;b[i][4]=a[i][4];b[i][5]=a[i][5];b[i][6]=+(a[i][6]+x).1N(3);b[i][7]=+(a[i][7]+y).1N(3);1g;1d"V":b[i][1]=+a[i][1]+y;1g;2F:1l(J j=1,1Y=a[i].14;j<1Y;j++){b[i][j]=+a[i][j]+((j%2)?x:y)}}}1k{b[i]=a[i]}2b(b[i][0]){1d"Z":1g;1d"H":x=b[i][1];1g;1d"V":y=b[i][1];1g;2F:x=b[i][b[i].14-2];y=b[i][b[i].14-1]}}11 b};1r.4J=O(e,f){J g=[9.3u(9.2P(e)),9.3u(9.2P(f))],N=[{x:0,y:0,1S:0,1M:0,X:0,Y:0},{x:0,y:0,1S:0,1M:0,X:0,Y:0}],43=O(a,d){K(!a){11["U"]}2b(a[0]){1d"M":d.X=a[1];d.Y=a[2];1g;1d"S":J b=d.x+(d.x-(d.1S||d.x));J c=d.y+(d.y-(d.1M||d.y));a=["C",b,c,a[1],a[2],a[3],a[4]];1g;1d"T":J b=d.x+(d.x-(d.1S||d.x));J c=d.y+(d.y-(d.1M||d.y));a=["Q",b,c,a[1],a[2]];1g;1d"H":a=["L",a[1],d.y];1g;1d"V":a=["L",d.x,a[1]];1g;1d"Z":a=["L",d.X,d.Y];1g}11 a},42=O(a,b,i){K(g[a][i][0]=="M"&&g[b][i][0]!="M"){g[b].2v(i,0,["M",N[b].x,N[b].y]);N[a].1S=g[a][i][g[a][i].14-4]||0;N[a].1M=g[a][i][g[a][i].14-3]||0;N[a].x=g[a][i][g[a][i].14-2];N[a].y=g[a][i][g[a][i].14-1];11 1V}1k K(g[a][i][0]=="L"&&g[b][i][0]=="C"){g[a][i]=["C",N[a].x,N[a].y,g[a][i][1],g[a][i][2],g[a][i][1],g[a][i][2]]}1k K(g[a][i][0]=="L"&&g[b][i][0]=="Q"){g[a][i]=["Q",g[a][i][1],g[a][i][2],g[a][i][1],g[a][i][2]]}1k K(g[a][i][0]=="Q"&&g[b][i][0]=="C"){J x=g[b][i][g[b][i].14-2];J y=g[b][i][g[b][i].14-1];g[b].2v(i+1,0,["Q",x,y,x,y]);g[a].2v(i,0,["C",N[a].x,N[a].y,N[a].x,N[a].y,N[a].x,N[a].y]);i++;N[b].1S=g[b][i][g[b][i].14-4]||0;N[b].1M=g[b][i][g[b][i].14-3]||0;N[b].x=g[b][i][g[b][i].14-2];N[b].y=g[b][i][g[b][i].14-1];11 1V}1k K(g[a][i][0]=="A"&&g[b][i][0]=="C"){J x=g[b][i][g[b][i].14-2];J y=g[b][i][g[b][i].14-1];g[b].2v(i+1,0,["A",0,0,g[a][i][3],g[a][i][4],g[a][i][5],x,y]);g[a].2v(i,0,["C",N[a].x,N[a].y,N[a].x,N[a].y,N[a].x,N[a].y]);i++;N[b].1S=g[b][i][g[b][i].14-4]||0;N[b].1M=g[b][i][g[b][i].14-3]||0;N[b].x=g[b][i][g[b][i].14-2];N[b].y=g[b][i][g[b][i].14-1];11 1V}1k K(g[a][i][0]=="U"){g[a][i][0]=g[b][i][0];1l(J j=1,1Y=g[b][i].14;j<1Y;j++){g[a][i][j]=(j%2)?N[a].x:N[a].y}}11 31};1l(J i=0;i<15.3W(g[0].14,g[1].14);i++){g[0][i]=43(g[0][i],N[0]);g[1][i]=43(g[1][i],N[1]);K(g[0][i][0]!=g[1][i][0]&&(42(0,1,i)||42(1,0,i))){4L}N[0].1S=g[0][i][g[0][i].14-4]||0;N[0].1M=g[0][i][g[0][i].14-3]||0;N[0].x=g[0][i][g[0][i].14-2];N[0].y=g[0][i][g[0][i].14-1];N[1].1S=g[1][i][g[1][i].14-4]||0;N[1].1M=g[1][i][g[1][i].14-3]||0;N[1].x=g[1][i][g[1][i].14-2];N[1].y=g[1][i][g[1][i].14-1]}11 g};',62,448,'|||||||||this||||||||||||||||||||||||||||||||||||var|if|||attrs|function|arguments||||||||||||return||last|length|Math||width|isAbsolute|parseFloat|setAttribute|height|round|case|path|stroke|break|document|canvas|appendChild|else|for|_|type|ii|attr|typeof|Raphael|style|fill|prototype|cx|cy|parseInt|rvml|join|in|top|createElement|blue|green|opacity|px|new|dots|curveTo|number|undefined|by|toFixed|node|000|parentNode|diff|bx|substring|Group|true|now|vml|jj|none||font|left|svgns|createElementNS|lineTo|ry|diry|string||that|switch|rx|text|group|vector|rt|rect|firstChild|push|svg|hue|start|cs|on|100|rollback|color|removeChild|transformations|split|splice|scale|Path|image|sx|position|absolute|apply|gradient|to|default|sy|setBox|dasharray|os|shape|id|toString|translation|circle|parsePathString|object|dim|rotation|toLowerCase|tx|dy|ty|getAttribute|toUpperCase|translate|call|false|ellipse|min|gl|qy|qx|255|els|animation_in_progress|url|ol|deg|safari|Array|absolutely|moveTo|SVG|gs|butt|y1|pathToRelative|childNodes|remove|getBBox|offset|bs|VML|coordsize|rs|pathToAbsolute|coordorigin|callee|size|getElementsByTagName|defs|pathfinder|pattern|Date|set|getTime|prev|xlink|rotate|stop|relatively|pathDimensions|insertBefore|hsb2rgb|availableAnimAttrs|colour|csv|display|hex|charAt|src|command|clearTimeout|max|name|linecap|qcurveTo|body|weight|edgeCases|processPath|miny|_create|saturation|family|M0|linejoin|miterlimit|rgb|getRGB|skip|setTimeout|columnWidth|rowHeight|transform|replace|dashes|addDashes|arcTo|gradients|clear|abs|square|andClose|textpath|match|namespaces|ig|version|getColor|hsb|brightness|fff|hide|show|block|Arial|instanceof|window|dx|toFront|toBack|pathEqualiser|oval|continue|filter|class|org|5522|w3|addRoundedCorner|www|http|while|200|miter|320|offsetHeight|offsetWidth|9999em|href|getElementById|throw|setAttributeNS||Error||container|not|found|createTextNode|raphael|cplineTo|svgattr|method|schemas|com|createStyleSheet|addRule|behavior|div|urn|320px|ar|at|wr|wa|sqrt|200px|clip|filled|stroked|shortdash|Gradient|add|shortdot|x1|shortdashdot|x2|y2|patternTransform|shortdashdotdot|dot|strokeWidth|RotY|patternUnits|userSpaceOnUse|flat|qb|img|textpathok|onload|ps|endcap|dash|longdash|preserveAspectRatio|anchor|middle|radial|qcurve|arg|create|slice|pos|joinstyle|arcsize|className|roundrect|2000|1999|drawGrid|dashdot|longdashdot|longdashdotdot|solid|progid|DXImageTransform|Microsoft|Matrix|M11|M12|M21|M22|Dx|Dy|sizingmethod|auto|expand|filtertype|bilinear|dashstyle|focus|animate|270|tile|microsoft|animateTo|item|angle|linear|shift|tagName|SVGAngle|CanvasRenderingContext2D|Canvas|only|Your|browser|supports|gradientTitle|nYou|are|running|unescape|Rapha|color2|null|16px|EBl|fontFamily|floor|rgb2hsb|fontSize|opacity2|fontWeight|075|focusposition||reset|achlmqstvz|RotX|concat|colors|value|Scale|atan'.split('|'),0,{}))
