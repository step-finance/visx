"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1008],{7737:function(e,i,n){n.d(i,{Oq:function(){return H},px:function(){return M},ZP:function(){return D}});var r=n(64993),a=n(2784),t=n(89549),s=n(13980),d=n.n(s),o=n(72779),p=n.n(o),u=n(23062);function l(e){var i=e.node,n=i.x0,r=i.x1,t=i.y0,s=i.y1;return a.createElement("rect",{x:n,y:t,width:Math.abs(r-n),height:Math.abs(s-t),fill:"#21D4FD"})}function z(e,i){e(i)}function h(e){var i=e.top,n=e.left,r=e.className,s=e.root,d=e.tile,o=e.size,h=e.round,m=e.padding,c=e.paddingInner,f=e.paddingOuter,y=e.paddingTop,g=e.paddingRight,T=e.paddingBottom,C=e.paddingLeft,O=e.children,A=e.nodeComponent,I=void 0===A?l:A,b=(0,u.Z)();d&&b.tile(d),o&&b.size(o),h&&b.round(h),m&&z(b.padding,m),c&&z(b.paddingInner,c),f&&z(b.paddingOuter,f),y&&z(b.paddingTop,y),g&&z(b.paddingRight,g),T&&z(b.paddingBottom,T),C&&z(b.paddingLeft,C);var M=b(s);return O?a.createElement(a.Fragment,null,O(M)):a.createElement(t.Z,{top:i,left:n,className:p()("visx-treemap",r)},I&&M.descendants().map((function(e,i){return a.createElement(t.Z,{key:"treemap-node-"+i},a.createElement(I,{node:e}))})))}l.propTypes={node:d().shape({x0:d().number.isRequired,x1:d().number.isRequired,y0:d().number.isRequired,y1:d().number.isRequired}).isRequired},h.propTypes={children:d().func,top:d().number,left:d().number,className:d().string,round:d().bool,padding:d().oneOfType([d().number,d().func]),paddingInner:d().oneOfType([d().number,d().func]),paddingOuter:d().oneOfType([d().number,d().func]),paddingTop:d().oneOfType([d().number,d().func]),paddingRight:d().oneOfType([d().number,d().func]),paddingBottom:d().oneOfType([d().number,d().func]),paddingLeft:d().oneOfType([d().number,d().func])};var m=n(10018),c=n(21086),f=n(29483),y=n(44925),g=n(3346),T=n(12460),C=n(44164),O=n(22210),A=n(47757),I=n(42613),b=n(52322),M="#f3e9d2",H="#114b5f",J=(0,I.Z)({domain:[0,Math.max.apply(Math,(0,r.Z)(A.Z.map((function(e){var i;return null!==(i=e.size)&&void 0!==i?i:0}))))],range:["#4281a4",M]}),L=(0,m.Z)().id((function(e){return e.id})).parentId((function(e){return e.parent}))(A.Z).sum((function(e){var i;return null!==(i=e.size)&&void 0!==i?i:0})),k={treemapSquarify:c.ZP,treemapBinary:f.Z,treemapDice:y.Z,treemapResquarify:g.Z,treemapSlice:T.Z,treemapSliceDice:C.Z},S={top:10,left:10,right:10,bottom:10};function D(e){var i=e.width,n=e.height,r=e.margin,s=void 0===r?S:r,d=(0,a.useState)("treemapSquarify"),o=d[0],p=d[1],u=i-s.left-s.right,l=n-s.top-s.bottom,z=(0,O.ZP)(L).sort((function(e,i){return(i.value||0)-(e.value||0)}));return i<10?null:(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{children:"tile method"})," ",(0,b.jsx)("select",{onClick:function(e){return e.stopPropagation()},onChange:function(e){return p(e.target.value)},value:o,children:Object.keys(k).map((function(e){return(0,b.jsx)("option",{value:e,children:e},e)}))}),(0,b.jsx)("div",{children:(0,b.jsxs)("svg",{width:i,height:n,children:[(0,b.jsx)("rect",{width:i,height:n,rx:14,fill:H}),(0,b.jsx)(h,{top:s.top,root:z,size:[u,l],tile:k[o],round:!0,children:function(e){return(0,b.jsx)(t.Z,{children:e.descendants().reverse().map((function(e,i){var n=e.x1-e.x0,r=e.y1-e.y0;return(0,b.jsxs)(t.Z,{top:e.y0+s.top,left:e.x0+s.left,children:[1===e.depth&&(0,b.jsx)("rect",{width:n,height:r,stroke:H,strokeWidth:4,fill:"transparent"}),e.depth>2&&(0,b.jsx)("rect",{width:n,height:r,stroke:H,fill:J(e.value||0)})]},"node-".concat(i))}))})}})]})})]})}try{Example.displayName="Example",Example.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"{ top: number; right: number; bottom: number; left: number; }"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-treemap/Example.tsx#Example"]={docgenInfo:Example.__docgenInfo,name:"Example",path:"src/sandboxes/visx-treemap/Example.tsx#Example"})}catch(V){}},47757:function(e,i){i.Z=void 0;var n=[{id:"Shakespeare",parent:null,size:0},{id:"Comedies",parent:"Shakespeare",size:null},{id:"Tragedies",parent:"Shakespeare",size:null},{id:"Histories",parent:"Shakespeare",size:null},{id:"As You Like It",parent:"Comedies",size:null},{id:"Adam",parent:"As You Like It",size:10},{id:"Amiens",parent:"As You Like It",size:10},{id:"Audrey",parent:"As You Like It",size:12},{id:"Celia",parent:"As You Like It",size:108},{id:"Charles",parent:"As You Like It",size:8},{id:"Corin",parent:"As You Like It",size:24},{id:"Dennis",parent:"As You Like It",size:2},{id:"Duke",parent:"As You Like It",size:32},{id:"Frederick",parent:"As You Like It",size:20},{id:"Hymen",parent:"As You Like It",size:1},{id:"Jaques (lord)",parent:"As You Like It",size:57},{id:"Jaques (son)",parent:"As You Like It",size:2},{id:"Le Beau",parent:"As You Like It",size:14},{id:"Oliver",parent:"As You Like It",size:37},{id:"Orlando",parent:"As You Like It",size:120},{id:"Phebe",parent:"As You Like It",size:23},{id:"Rosalind",parent:"As You Like It",size:201},{id:"Silvius",parent:"As You Like It",size:24},{id:"Sir Oliver Martext",parent:"As You Like It",size:3},{id:"Touchstone",parent:"As You Like It",size:74},{id:"William",parent:"As You Like It",size:11},{id:"Comedy Of Errors",parent:"Comedies",size:null},{id:"Adriana",parent:"Comedy Of Errors",size:79},{id:"Aegeon",parent:"Comedy Of Errors",size:17},{id:"Aemilia",parent:"Comedy Of Errors",size:16},{id:"Angelo",parent:"Comedy Of Errors",size:31},{id:"Antipholus of Ephesus",parent:"Comedy Of Errors",size:76},{id:"Antipholus of Syracuse",parent:"Comedy Of Errors",size:103},{id:"Balthazar",parent:"Comedy Of Errors",size:5},{id:"Courtezan",parent:"Comedy Of Errors",size:11},{id:"Dromio of Ephesus",parent:"Comedy Of Errors",size:63},{id:"Dromio of Syracuse",parent:"Comedy Of Errors",size:99},{id:"Luce",parent:"Comedy Of Errors",size:7},{id:"Luciana",parent:"Comedy Of Errors",size:43},{id:"Pinch",parent:"Comedy Of Errors",size:6},{id:"Solinus",parent:"Comedy Of Errors",size:22},{id:"Merchant Of Venice",parent:"Comedies",size:null},{id:"Antonio",parent:"Merchant Of Venice",size:47},{id:"Balthasar",parent:"Merchant Of Venice",size:1},{id:"Bassanio",parent:"Merchant Of Venice",size:73},{id:"Duke (of Venice)",parent:"Merchant Of Venice",size:18},{id:"Gratiano",parent:"Merchant Of Venice",size:48},{id:"Jessica",parent:"Merchant Of Venice",size:26},{id:"Launcelot Gobbo",parent:"Merchant Of Venice",size:44},{id:"Leonardo",parent:"Merchant Of Venice",size:2},{id:"Lorenzo",parent:"Merchant Of Venice",size:47},{id:"Nerissa",parent:"Merchant Of Venice",size:36},{id:"Old Gobbo",parent:"Merchant Of Venice",size:19},{id:"Portia",parent:"Merchant Of Venice",size:117},{id:"Prince of Arragon",parent:"Merchant Of Venice",size:4},{id:"Prince of Morocco",parent:"Merchant Of Venice",size:7},{id:"Salanio",parent:"Merchant Of Venice",size:18},{id:"Salarino",parent:"Merchant Of Venice",size:27},{id:"Salerio",parent:"Merchant Of Venice",size:6},{id:"Shylock",parent:"Merchant Of Venice",size:79},{id:"Stephano",parent:"Merchant Of Venice",size:3},{id:"Tubal",parent:"Merchant Of Venice",size:8},{id:"Midsummer Night's Dream",parent:"Comedies",size:null},{id:"Bottom",parent:"Midsummer Night's Dream",size:59},{id:"Cobweb",parent:"Midsummer Night's Dream",size:4},{id:"Demetrius",parent:"Midsummer Night's Dream",size:48},{id:"Egeus",parent:"Midsummer Night's Dream",size:7},{id:"Fairy",parent:"Midsummer Night's Dream",size:4},{id:"Flute",parent:"Midsummer Night's Dream",size:18},{id:"Helena",parent:"Midsummer Night's Dream",size:36},{id:"Hermia",parent:"Midsummer Night's Dream",size:48},{id:"Hippolyta",parent:"Midsummer Night's Dream",size:14},{id:"Lysander",parent:"Midsummer Night's Dream",size:50},{id:"Moth",parent:"Midsummer Night's Dream",size:2},{id:"Mustardseed",parent:"Midsummer Night's Dream",size:5},{id:"Oberon",parent:"Midsummer Night's Dream",size:29},{id:"Peaseblossom",parent:"Midsummer Night's Dream",size:4},{id:"Philostrate",parent:"Midsummer Night's Dream",size:6},{id:"Puck",parent:"Midsummer Night's Dream",size:33},{id:"Quince",parent:"Midsummer Night's Dream",size:40},{id:"Snout",parent:"Midsummer Night's Dream",size:9},{id:"Snug",parent:"Midsummer Night's Dream",size:4},{id:"Starveling",parent:"Midsummer Night's Dream",size:7},{id:"Theseus",parent:"Midsummer Night's Dream",size:48},{id:"Titania",parent:"Midsummer Night's Dream",size:23},{id:"Taming Of The Shrew",parent:"Comedies",size:null},{id:"Baptista Minola",parent:"Taming Of The Shrew",size:68},{id:"Bianca",parent:"Taming Of The Shrew",size:29},{id:"Biondello",parent:"Taming Of The Shrew",size:39},{id:"Christopher Sly",parent:"Taming Of The Shrew",size:24},{id:"Curtis",parent:"Taming Of The Shrew",size:20},{id:"Gremio",parent:"Taming Of The Shrew",size:58},{id:"Grumio",parent:"Taming Of The Shrew",size:63},{id:"Haberdasher",parent:"Taming Of The Shrew",size:1},{id:"Hortensio",parent:"Taming Of The Shrew",size:70},{id:"Joseph",parent:"Taming Of The Shrew",size:1},{id:"Katherina",parent:"Taming Of The Shrew",size:82},{id:"Lucentio",parent:"Taming Of The Shrew",size:61},{id:"Nathaniel",parent:"Taming Of The Shrew",size:4},{id:"Nicholas",parent:"Taming Of The Shrew",size:1},{id:"Peter",parent:"Taming Of The Shrew",size:2},{id:"Petruchio",parent:"Taming Of The Shrew",size:158},{id:"Philip",parent:"Taming Of The Shrew",size:1},{id:"Tranio",parent:"Taming Of The Shrew",size:90},{id:"Vincentio",parent:"Taming Of The Shrew",size:23},{id:"The Tempest",parent:"Comedies",size:null},{id:"Adrian",parent:"The Tempest",size:9},{id:"Alonso",parent:"The Tempest",size:40},{id:"Antonio, duke of Milan",parent:"The Tempest",size:57},{id:"Ariel",parent:"The Tempest",size:45},{id:"Caliban",parent:"The Tempest",size:50},{id:"Ceres",parent:"The Tempest",size:4},{id:"Ferdinand",parent:"The Tempest",size:31},{id:"Francisco",parent:"The Tempest",size:2},{id:"Gonzalo",parent:"The Tempest",size:52},{id:"Iris",parent:"The Tempest",size:4},{id:"Juno",parent:"The Tempest",size:2},{id:"Master",parent:"The Tempest",size:2},{id:"Miranda",parent:"The Tempest",size:50},{id:"Nymphs",parent:"The Tempest",size:0},{id:"Prospero",parent:"The Tempest",size:114},{id:"Reapers",parent:"The Tempest",size:0},{id:"Sebastian",parent:"The Tempest",size:67},{id:"Stephano (Servant to Portia)",parent:"The Tempest",size:60},{id:"Trinculo",parent:"The Tempest",size:39},{id:"Henry VIII",parent:"Histories",size:null},{id:"Anne Bullen",parent:"Henry VIII",size:18},{id:"Archbishop Cranmer",parent:"Henry VIII",size:21},{id:"Bishop Lincoln",parent:"Henry VIII",size:2},{id:"Brandon",parent:"Henry VIII",size:6},{id:"Capucius",parent:"Henry VIII",size:5},{id:"Cardinal Campeius",parent:"Henry VIII",size:14},{id:"Cardinal Wolsey",parent:"Henry VIII",size:79},{id:"Cromwell",parent:"Henry VIII",size:21},{id:"Doctor Butts",parent:"Henry VIII",size:4},{id:"Duke of Buckingham",parent:"Henry VIII",size:26},{id:"Duke of Norfolk",parent:"Henry VIII",size:48},{id:"Duke of Suffolk",parent:"Henry VIII",size:30},{id:"Earl of Surrey",parent:"Henry VIII",size:24},{id:"First Secretary to Wolsey",parent:"Henry VIII",size:2},{id:"Gardiner",parent:"Henry VIII",size:22},{id:"Garter",parent:"Henry VIII",size:1},{id:"Griffith",parent:"Henry VIII",size:13},{id:"King Henry VIII",parent:"Henry VIII",size:81},{id:"Lord Abergavenny",parent:"Henry VIII",size:5},{id:"Lord Chamberlain",parent:"Henry VIII",size:38},{id:"Lord Chancellor",parent:"Henry VIII",size:7},{id:"Lord Sands",parent:"Henry VIII",size:17},{id:"Old Lady",parent:"Henry VIII",size:14},{id:"Patience",parent:"Henry VIII",size:3},{id:"Porter (door-keeper of the Council-chamber)",parent:"Henry VIII",size:10},{id:"Queen Katharine",parent:"Henry VIII",size:50},{id:"Sir Anthony Denny",parent:"Henry VIII",size:3},{id:"Sir Henry Guildford",parent:"Henry VIII",size:1},{id:"Sir Nicholas Vaux",parent:"Henry VIII",size:1},{id:"Sir Thomas Lovell",parent:"Henry VIII",size:21},{id:"Surveyor to the Duke of Buckingham",parent:"Henry VIII",size:9},{id:"History Of King John",parent:"Histories",size:null},{id:"Arthur Duke of Bretagne",parent:"History Of King John",size:23},{id:"Blanch",parent:"History Of King John",size:9},{id:"Cardinal Pandulph",parent:"History Of King John",size:23},{id:"Chatillon",parent:"History Of King John",size:5},{id:"Constance",parent:"History Of King John",size:36},{id:"Essex",parent:"History Of King John",size:1},{id:"Faulconbridge",parent:"History Of King John",size:4},{id:"Hubert de Burgh",parent:"History Of King John",size:52},{id:"James Gurney",parent:"History Of King John",size:1},{id:"King John",parent:"History Of King John",size:95},{id:"King Phillip",parent:"History Of King John",size:43},{id:"Lady Faulconbridge",parent:"History Of King John",size:5},{id:"Lewis the Dauphin",parent:"History Of King John",size:29},{id:"Lord Bigot",parent:"History Of King John",size:6},{id:"Lymoges duke of Austria",parent:"History Of King John",size:16},{id:"Melun",parent:"History Of King John",size:3},{id:"Pembroke earl of Pembroke",parent:"History Of King John",size:20},{id:"Peter of Pomfret",parent:"History Of King John",size:1},{id:"Philip the Bastard",parent:"History Of King John",size:89},{id:"Prince Henry",parent:"History Of King John",size:8},{id:"Queen Elinor",parent:"History Of King John",size:22},{id:"Salisbury earl of Salisbury",parent:"History Of King John",size:36},{id:"Antony And Cleopatra",parent:"Tragedies",size:null},{id:"Agrippa",parent:"Antony And Cleopatra",size:28},{id:"Alexas",parent:"Antony And Cleopatra",size:15},{id:"Antony",parent:"Antony And Cleopatra",size:202},{id:"Canidius",parent:"Antony And Cleopatra",size:10},{id:"Captain",parent:"Antony And Cleopatra",size:1},{id:"Charmian",parent:"Antony And Cleopatra",size:63},{id:"Cleopatra",parent:"Antony And Cleopatra",size:204},{id:"Demetrius (Friend to Antony)",parent:"Antony And Cleopatra",size:2},{id:"Dercetas",parent:"Antony And Cleopatra",size:5},{id:"Diomedes",parent:"Antony And Cleopatra",size:7},{id:"Dolabella",parent:"Antony And Cleopatra",size:23},{id:"Domitius Enobarus",parent:"Antony And Cleopatra",size:113},{id:"Egyptian",parent:"Antony And Cleopatra",size:2},{id:"Eros",parent:"Antony And Cleopatra",size:27},{id:"Euphronius",parent:"Antony And Cleopatra",size:5},{id:"Gallus",parent:"Antony And Cleopatra",size:1},{id:"Iras",parent:"Antony And Cleopatra",size:18},{id:"Lepidus",parent:"Antony And Cleopatra",size:30},{id:"Mardian",parent:"Antony And Cleopatra",size:7},{id:"Mecaenas",parent:"Antony And Cleopatra",size:16},{id:"Menas",parent:"Antony And Cleopatra",size:35},{id:"Menecrates",parent:"Antony And Cleopatra",size:2},{id:"Octavia",parent:"Antony And Cleopatra",size:13},{id:"Octavius",parent:"Antony And Cleopatra",size:98},{id:"Philo",parent:"Antony And Cleopatra",size:2},{id:"Pompey",parent:"Antony And Cleopatra",size:41},{id:"Proculeius",parent:"Antony And Cleopatra",size:10},{id:"Scarus",parent:"Antony And Cleopatra",size:12},{id:"Seleucus",parent:"Antony And Cleopatra",size:3},{id:"Silius",parent:"Antony And Cleopatra",size:3},{id:"Taurus",parent:"Antony And Cleopatra",size:1},{id:"Thyreus",parent:"Antony And Cleopatra",size:12},{id:"Varrius",parent:"Antony And Cleopatra",size:1},{id:"Ventidius",parent:"Antony And Cleopatra",size:4},{id:"Coriolanus",parent:"Tragedies",size:null},{id:"Aedile",parent:"Coriolanus",size:10},{id:"Cominius",parent:"Coriolanus",size:67},{id:"Coriolanus (Caius Marcius Coriolanus)",parent:"Coriolanus",size:189},{id:"Junius Brutus",parent:"Coriolanus",size:91},{id:"Lieutenant",parent:"Coriolanus",size:4},{id:"Menenius Agrippa",parent:"Coriolanus",size:162},{id:"Patrician",parent:"Coriolanus",size:3},{id:"Roman",parent:"Coriolanus",size:10},{id:"Sicinius Velutus",parent:"Coriolanus",size:117},{id:"Titus Lartius",parent:"Coriolanus",size:23},{id:"Tullus Aufidius",parent:"Coriolanus",size:45},{id:"Valeria",parent:"Coriolanus",size:14},{id:"Virgilia",parent:"Coriolanus",size:26},{id:"Volsce",parent:"Coriolanus",size:9},{id:"Volumnia",parent:"Coriolanus",size:57},{id:"Young Coriolanus",parent:"Coriolanus",size:1},{id:"Cymbeline",parent:"Tragedies",size:null},{id:"Arviragus",parent:"Cymbeline",size:46},{id:"Belarius",parent:"Cymbeline",size:58},{id:"Caius Lucius",parent:"Cymbeline",size:25},{id:"Cloten",parent:"Cymbeline",size:77},{id:"Cornelius (physician)",parent:"Cymbeline",size:13},{id:"Cymbeline, King of Britain",parent:"Cymbeline",size:81},{id:"Guiderius",parent:"Cymbeline",size:62},{id:"Helen",parent:"Cymbeline",size:0},{id:"Iachimo",parent:"Cymbeline",size:77},{id:"Imogen",parent:"Cymbeline",size:118},{id:"Jupiter",parent:"Cymbeline",size:1},{id:"Philario",parent:"Cymbeline",size:14},{id:"Pisanio",parent:"Cymbeline",size:58},{id:"Posthumus Leonatus",parent:"Cymbeline",size:77},{id:"Queen",parent:"Cymbeline",size:27},{id:"Roman Captain",parent:"Cymbeline",size:4},{id:"Sicilius Leonatus",parent:"Cymbeline",size:7},{id:"The Tragedy of Hamlet, Prince of Denmark",parent:"Tragedies",size:null},{id:"Bernardo",parent:"The Tragedy of Hamlet, Prince of Denmark",size:19},{id:"Claudius, King of Denmark",parent:"The Tragedy of Hamlet, Prince of Denmark",size:102},{id:"Cornelius",parent:"The Tragedy of Hamlet, Prince of Denmark",size:1},{id:"Father's Ghost",parent:"The Tragedy of Hamlet, Prince of Denmark",size:15},{id:"Fortinbras",parent:"The Tragedy of Hamlet, Prince of Denmark",size:6},{id:"Francisco ",parent:"The Tragedy of Hamlet, Prince of Denmark",size:8},{id:"Gertrude",parent:"The Tragedy of Hamlet, Prince of Denmark",size:69},{id:"Guildenstern",parent:"The Tragedy of Hamlet, Prince of Denmark",size:29},{id:"Hamlet",parent:"The Tragedy of Hamlet, Prince of Denmark",size:358},{id:"Horatio",parent:"The Tragedy of Hamlet, Prince of Denmark",size:109},{id:"Laertes",parent:"The Tragedy of Hamlet, Prince of Denmark",size:62},{id:"Lucianus",parent:"The Tragedy of Hamlet, Prince of Denmark",size:0},{id:"Marcellus",parent:"The Tragedy of Hamlet, Prince of Denmark",size:37},{id:"Ophelia",parent:"The Tragedy of Hamlet, Prince of Denmark",size:58},{id:"Osric",parent:"The Tragedy of Hamlet, Prince of Denmark",size:25},{id:"Polonius",parent:"The Tragedy of Hamlet, Prince of Denmark",size:86},{id:"Reynaldo",parent:"The Tragedy of Hamlet, Prince of Denmark",size:13},{id:"Rosencrantz",parent:"The Tragedy of Hamlet, Prince of Denmark",size:48},{id:"Voltemand",parent:"The Tragedy of Hamlet, Prince of Denmark",size:1},{id:"Julius Caesar",parent:"Tragedies",size:null},{id:"Antony (Marcus Antonius)",parent:"Julius Caesar",size:51},{id:"Artemidorus of Cnidos",parent:"Julius Caesar",size:4},{id:"Brutus (Marcus Brutus)",parent:"Julius Caesar",size:194},{id:"Caesar (Julius Caesar)",parent:"Julius Caesar",size:42},{id:"Calpurnia",parent:"Julius Caesar",size:6},{id:"Casca",parent:"Julius Caesar",size:39},{id:"Cassius",parent:"Julius Caesar",size:140},{id:"Cicero",parent:"Julius Caesar",size:4},{id:"Cinna",parent:"Julius Caesar",size:11},{id:"Cinna the Poet",parent:"Julius Caesar",size:8},{id:"Claudius",parent:"Julius Caesar",size:2},{id:"Clitus",parent:"Julius Caesar",size:8},{id:"Dardanius",parent:"Julius Caesar",size:3},{id:"Decius Brutus",parent:"Julius Caesar",size:12},{id:"Flavius",parent:"Julius Caesar",size:5},{id:"Lepidus (Marcus Antonius Lepidus)",parent:"Julius Caesar",size:3},{id:"Ligarius",parent:"Julius Caesar",size:5},{id:"Lucilius",parent:"Julius Caesar",size:10},{id:"Lucius",parent:"Julius Caesar",size:24},{id:"Marullus",parent:"Julius Caesar",size:6},{id:"Messala",parent:"Julius Caesar",size:20},{id:"Metellus Cimber",parent:"Julius Caesar",size:5},{id:"Octavius (Octavius Caesar)",parent:"Julius Caesar",size:19},{id:"Pindarus",parent:"Julius Caesar",size:5},{id:"Popilius (Popilius Lena)",parent:"Julius Caesar",size:2},{id:"Portia (wife of Brutus)",parent:"Julius Caesar",size:16},{id:"Publius",parent:"Julius Caesar",size:2},{id:"Strato",parent:"Julius Caesar",size:4},{id:"Tintinius",parent:"Julius Caesar",size:10},{id:"Trebonius",parent:"Julius Caesar",size:4},{id:"Varro",parent:"Julius Caesar",size:6},{id:"Volumnius",parent:"Julius Caesar",size:3},{id:"Young Cato",parent:"Julius Caesar",size:3},{id:"King Lear",parent:"Tragedies",size:null},{id:"Cordelia",parent:"King Lear",size:31},{id:"Curan",parent:"King Lear",size:4},{id:"Duke of Albany",parent:"King Lear",size:58},{id:"Duke of Burgundy",parent:"King Lear",size:5},{id:"Duke of Cornwall",parent:"King Lear",size:53},{id:"Earl of Gloucester",parent:"King Lear",size:118},{id:"Earl of Kent",parent:"King Lear",size:127},{id:"Edgar",parent:"King Lear",size:98},{id:"Edmund",parent:"King Lear",size:79},{id:"Goneril",parent:"King Lear",size:53},{id:"King of France",parent:"King Lear",size:5},{id:"Lear",parent:"King Lear",size:188},{id:"Oswald",parent:"King Lear",size:38},{id:"Regan",parent:"King Lear",size:73},{id:"The Tragedy Of Macbeth",parent:"Tragedies",size:null},{id:"Angus",parent:"The Tragedy Of Macbeth",size:4},{id:"Banquo",parent:"The Tragedy Of Macbeth",size:33},{id:"Caithness",parent:"The Tragedy Of Macbeth",size:3},{id:"Donalbain",parent:"The Tragedy Of Macbeth",size:3},{id:"Duncan",parent:"The Tragedy Of Macbeth",size:18},{id:"Fleance",parent:"The Tragedy Of Macbeth",size:2},{id:"Hecate",parent:"The Tragedy Of Macbeth",size:2},{id:"Lady Macbeth",parent:"The Tragedy Of Macbeth",size:59},{id:"Lady Macduff",parent:"The Tragedy Of Macbeth",size:19},{id:"Lennox",parent:"The Tragedy Of Macbeth",size:21},{id:"Macbeth",parent:"The Tragedy Of Macbeth",size:146},{id:"Macduff",parent:"The Tragedy Of Macbeth",size:59},{id:"Malcolm",parent:"The Tragedy Of Macbeth",size:40},{id:"Menteith",parent:"The Tragedy Of Macbeth",size:5},{id:"Porter",parent:"The Tragedy Of Macbeth",size:4},{id:"Ross",parent:"The Tragedy Of Macbeth",size:39},{id:"Seyton",parent:"The Tragedy Of Macbeth",size:5},{id:"Siward",parent:"The Tragedy Of Macbeth",size:11},{id:"Son (Macduff's son)",parent:"The Tragedy Of Macbeth",size:14},{id:"Young Siward",parent:"The Tragedy Of Macbeth",size:4},{id:"The Tragedy Of Othello",parent:"Tragedies",size:null},{id:"Bianca (Mistress to Cassio)",parent:"The Tragedy Of Othello",size:15},{id:"Brabantio",parent:"The Tragedy Of Othello",size:30},{id:"Cassio",parent:"The Tragedy Of Othello",size:110},{id:"Desdemona",parent:"The Tragedy Of Othello",size:165},{id:"Duke of Venice",parent:"The Tragedy Of Othello",size:25},{id:"Emilia",parent:"The Tragedy Of Othello",size:103},{id:"Gratiano (Brother to Brabantio)",parent:"The Tragedy Of Othello",size:20},{id:"Iago",parent:"The Tragedy Of Othello",size:272},{id:"Lodovico",parent:"The Tragedy Of Othello",size:33},{id:"Montano",parent:"The Tragedy Of Othello",size:24},{id:"Othello",parent:"The Tragedy Of Othello",size:274},{id:"Roderigo",parent:"The Tragedy Of Othello",size:59},{id:"Romeo And Juliet",parent:"Tragedies",size:null},{id:"Abraham",parent:"Romeo And Juliet",size:5},{id:"Balthasar (Servant to Romeo)",parent:"Romeo And Juliet",size:12},{id:"Benvolio",parent:"Romeo And Juliet",size:64},{id:"Capulet",parent:"Romeo And Juliet",size:51},{id:"Friar John",parent:"Romeo And Juliet",size:4},{id:"Friar Laurence",parent:"Romeo And Juliet",size:55},{id:"Gregory",parent:"Romeo And Juliet",size:15},{id:"Juliet",parent:"Romeo And Juliet",size:118},{id:"Lady Capulet",parent:"Romeo And Juliet",size:45},{id:"Lady Montague",parent:"Romeo And Juliet",size:2},{id:"Mercutio",parent:"Romeo And Juliet",size:62},{id:"Montague",parent:"Romeo And Juliet",size:10},{id:"Paris",parent:"Romeo And Juliet",size:23},{id:"Peter (Servant to Juliet's Nurse)",parent:"Romeo And Juliet",size:13},{id:"Prince Escalus",parent:"Romeo And Juliet",size:16},{id:"Romeo",parent:"Romeo And Juliet",size:163},{id:"Sampson",parent:"Romeo And Juliet",size:20},{id:"Tybalt",parent:"Romeo And Juliet",size:17}];i.Z=n},84472:function(e){e.exports=JSON.parse('{"name":"@visx/demo-treemap","description":"Standalone visx treemap demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^18","@types/react-dom":"^18","@visx/group":"latest","@visx/hierarchy":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/scale":"latest","react":"^18","react-dom":"^18","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","treemap","hierarchy"]}')}}]);