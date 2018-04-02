{"filter":false,"title":"table.js","tooltip":"/public/javascripts/dash/table.js","undoManager":{"mark":72,"position":72,"stack":[[{"start":{"row":5,"column":27},"end":{"row":6,"column":0},"action":"insert","lines":["",""],"id":47},{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":6,"column":4},"end":{"row":6,"column":25},"action":"insert","lines":["responsiveLayout:true"],"id":48}],[{"start":{"row":6,"column":25},"end":{"row":6,"column":26},"action":"insert","lines":[","],"id":49}],[{"start":{"row":6,"column":0},"end":{"row":6,"column":26},"action":"remove","lines":["    responsiveLayout:true,"],"id":53}],[{"start":{"row":5,"column":27},"end":{"row":6,"column":0},"action":"remove","lines":["",""],"id":54}],[{"start":{"row":0,"column":0},"end":{"row":16,"column":3},"action":"remove","lines":["var tableData = [","    {id:1, name:\"Billy Bob\", age:\"12\", gender:\"male\", height:1, col:\"red\", dob:\"\", cheese:1},","    {id:2, name:\"Mary May\", age:\"1\", gender:\"female\", height:2, col:\"blue\", dob:\"14/05/1982\", cheese:true},","]","","$(\"#maintable\").tabulator({","    data:tableData, //set initial table data","    columns:[","        {title:\"Name\", field:\"name\"},","        {title:\"Age\", field:\"age\"},","        {title:\"Gender\", field:\"gender\"},","        {title:\"Height\", field:\"height\"},","        {title:\"Favourite Color\", field:\"col\"},","        {title:\"Date Of Birth\", field:\"dob\"},","        {title:\"Cheese Preference\", field:\"cheese\"},","    ],","});"],"id":55},{"start":{"row":0,"column":0},"end":{"row":51,"column":4},"action":"insert","lines":["var dataSet = [","    [ \"Tiger Nixon\", \"System Architect\", \"Edinburgh\", \"5421\", \"2011/04/25\", \"$320,800\" ],","    [ \"Garrett Winters\", \"Accountant\", \"Tokyo\", \"8422\", \"2011/07/25\", \"$170,750\" ],","    [ \"Ashton Cox\", \"Junior Technical Author\", \"San Francisco\", \"1562\", \"2009/01/12\", \"$86,000\" ],","    [ \"Cedric Kelly\", \"Senior Javascript Developer\", \"Edinburgh\", \"6224\", \"2012/03/29\", \"$433,060\" ],","    [ \"Airi Satou\", \"Accountant\", \"Tokyo\", \"5407\", \"2008/11/28\", \"$162,700\" ],","    [ \"Brielle Williamson\", \"Integration Specialist\", \"New York\", \"4804\", \"2012/12/02\", \"$372,000\" ],","    [ \"Herrod Chandler\", \"Sales Assistant\", \"San Francisco\", \"9608\", \"2012/08/06\", \"$137,500\" ],","    [ \"Rhona Davidson\", \"Integration Specialist\", \"Tokyo\", \"6200\", \"2010/10/14\", \"$327,900\" ],","    [ \"Colleen Hurst\", \"Javascript Developer\", \"San Francisco\", \"2360\", \"2009/09/15\", \"$205,500\" ],","    [ \"Sonya Frost\", \"Software Engineer\", \"Edinburgh\", \"1667\", \"2008/12/13\", \"$103,600\" ],","    [ \"Jena Gaines\", \"Office Manager\", \"London\", \"3814\", \"2008/12/19\", \"$90,560\" ],","    [ \"Quinn Flynn\", \"Support Lead\", \"Edinburgh\", \"9497\", \"2013/03/03\", \"$342,000\" ],","    [ \"Charde Marshall\", \"Regional Director\", \"San Francisco\", \"6741\", \"2008/10/16\", \"$470,600\" ],","    [ \"Haley Kennedy\", \"Senior Marketing Designer\", \"London\", \"3597\", \"2012/12/18\", \"$313,500\" ],","    [ \"Tatyana Fitzpatrick\", \"Regional Director\", \"London\", \"1965\", \"2010/03/17\", \"$385,750\" ],","    [ \"Michael Silva\", \"Marketing Designer\", \"London\", \"1581\", \"2012/11/27\", \"$198,500\" ],","    [ \"Paul Byrd\", \"Chief Financial Officer (CFO)\", \"New York\", \"3059\", \"2010/06/09\", \"$725,000\" ],","    [ \"Gloria Little\", \"Systems Administrator\", \"New York\", \"1721\", \"2009/04/10\", \"$237,500\" ],","    [ \"Bradley Greer\", \"Software Engineer\", \"London\", \"2558\", \"2012/10/13\", \"$132,000\" ],","    [ \"Dai Rios\", \"Personnel Lead\", \"Edinburgh\", \"2290\", \"2012/09/26\", \"$217,500\" ],","    [ \"Jenette Caldwell\", \"Development Lead\", \"New York\", \"1937\", \"2011/09/03\", \"$345,000\" ],","    [ \"Yuri Berry\", \"Chief Marketing Officer (CMO)\", \"New York\", \"6154\", \"2009/06/25\", \"$675,000\" ],","    [ \"Caesar Vance\", \"Pre-Sales Support\", \"New York\", \"8330\", \"2011/12/12\", \"$106,450\" ],","    [ \"Doris Wilder\", \"Sales Assistant\", \"Sidney\", \"3023\", \"2010/09/20\", \"$85,600\" ],","    [ \"Angelica Ramos\", \"Chief Executive Officer (CEO)\", \"London\", \"5797\", \"2009/10/09\", \"$1,200,000\" ],","    [ \"Gavin Joyce\", \"Developer\", \"Edinburgh\", \"8822\", \"2010/12/22\", \"$92,575\" ],","    [ \"Jennifer Chang\", \"Regional Director\", \"Singapore\", \"9239\", \"2010/11/14\", \"$357,650\" ],","    [ \"Brenden Wagner\", \"Software Engineer\", \"San Francisco\", \"1314\", \"2011/06/07\", \"$206,850\" ],","    [ \"Fiona Green\", \"Chief Operating Officer (COO)\", \"San Francisco\", \"2947\", \"2010/03/11\", \"$850,000\" ],","    [ \"Shou Itou\", \"Regional Marketing\", \"Tokyo\", \"8899\", \"2011/08/14\", \"$163,000\" ],","    [ \"Michelle House\", \"Integration Specialist\", \"Sidney\", \"2769\", \"2011/06/02\", \"$95,400\" ],","    [ \"Suki Burks\", \"Developer\", \"London\", \"6832\", \"2009/10/22\", \"$114,500\" ],","    [ \"Prescott Bartlett\", \"Technical Author\", \"London\", \"3606\", \"2011/05/07\", \"$145,000\" ],","    [ \"Gavin Cortez\", \"Team Leader\", \"San Francisco\", \"2860\", \"2008/10/26\", \"$235,500\" ],","    [ \"Martena Mccray\", \"Post-Sales support\", \"Edinburgh\", \"8240\", \"2011/03/09\", \"$324,050\" ],","    [ \"Unity Butler\", \"Marketing Designer\", \"San Francisco\", \"5384\", \"2009/12/09\", \"$85,675\" ]","];"," ","$(document).ready(function() {","    $('#example').DataTable( {","        data: dataSet,","        columns: [","            { title: \"Name\" },","            { title: \"Position\" },","            { title: \"Office\" },","            { title: \"Extn.\" },","            { title: \"Start date\" },","            { title: \"Salary\" }","        ]","    } );","} );"]}],[{"start":{"row":40,"column":8},"end":{"row":40,"column":15},"action":"remove","lines":["example"],"id":56},{"start":{"row":40,"column":8},"end":{"row":40,"column":9},"action":"insert","lines":["m"]}],[{"start":{"row":40,"column":9},"end":{"row":40,"column":10},"action":"insert","lines":["a"],"id":57}],[{"start":{"row":40,"column":10},"end":{"row":40,"column":11},"action":"insert","lines":["i"],"id":58}],[{"start":{"row":40,"column":11},"end":{"row":40,"column":12},"action":"insert","lines":["n"],"id":59}],[{"start":{"row":40,"column":12},"end":{"row":40,"column":13},"action":"insert","lines":["t"],"id":60}],[{"start":{"row":40,"column":13},"end":{"row":40,"column":14},"action":"insert","lines":["a"],"id":61}],[{"start":{"row":40,"column":14},"end":{"row":40,"column":15},"action":"insert","lines":["b"],"id":62}],[{"start":{"row":40,"column":15},"end":{"row":40,"column":16},"action":"insert","lines":["l"],"id":63}],[{"start":{"row":40,"column":16},"end":{"row":40,"column":17},"action":"insert","lines":["e"],"id":64}],[{"start":{"row":0,"column":0},"end":{"row":51,"column":4},"action":"remove","lines":["var dataSet = [","    [ \"Tiger Nixon\", \"System Architect\", \"Edinburgh\", \"5421\", \"2011/04/25\", \"$320,800\" ],","    [ \"Garrett Winters\", \"Accountant\", \"Tokyo\", \"8422\", \"2011/07/25\", \"$170,750\" ],","    [ \"Ashton Cox\", \"Junior Technical Author\", \"San Francisco\", \"1562\", \"2009/01/12\", \"$86,000\" ],","    [ \"Cedric Kelly\", \"Senior Javascript Developer\", \"Edinburgh\", \"6224\", \"2012/03/29\", \"$433,060\" ],","    [ \"Airi Satou\", \"Accountant\", \"Tokyo\", \"5407\", \"2008/11/28\", \"$162,700\" ],","    [ \"Brielle Williamson\", \"Integration Specialist\", \"New York\", \"4804\", \"2012/12/02\", \"$372,000\" ],","    [ \"Herrod Chandler\", \"Sales Assistant\", \"San Francisco\", \"9608\", \"2012/08/06\", \"$137,500\" ],","    [ \"Rhona Davidson\", \"Integration Specialist\", \"Tokyo\", \"6200\", \"2010/10/14\", \"$327,900\" ],","    [ \"Colleen Hurst\", \"Javascript Developer\", \"San Francisco\", \"2360\", \"2009/09/15\", \"$205,500\" ],","    [ \"Sonya Frost\", \"Software Engineer\", \"Edinburgh\", \"1667\", \"2008/12/13\", \"$103,600\" ],","    [ \"Jena Gaines\", \"Office Manager\", \"London\", \"3814\", \"2008/12/19\", \"$90,560\" ],","    [ \"Quinn Flynn\", \"Support Lead\", \"Edinburgh\", \"9497\", \"2013/03/03\", \"$342,000\" ],","    [ \"Charde Marshall\", \"Regional Director\", \"San Francisco\", \"6741\", \"2008/10/16\", \"$470,600\" ],","    [ \"Haley Kennedy\", \"Senior Marketing Designer\", \"London\", \"3597\", \"2012/12/18\", \"$313,500\" ],","    [ \"Tatyana Fitzpatrick\", \"Regional Director\", \"London\", \"1965\", \"2010/03/17\", \"$385,750\" ],","    [ \"Michael Silva\", \"Marketing Designer\", \"London\", \"1581\", \"2012/11/27\", \"$198,500\" ],","    [ \"Paul Byrd\", \"Chief Financial Officer (CFO)\", \"New York\", \"3059\", \"2010/06/09\", \"$725,000\" ],","    [ \"Gloria Little\", \"Systems Administrator\", \"New York\", \"1721\", \"2009/04/10\", \"$237,500\" ],","    [ \"Bradley Greer\", \"Software Engineer\", \"London\", \"2558\", \"2012/10/13\", \"$132,000\" ],","    [ \"Dai Rios\", \"Personnel Lead\", \"Edinburgh\", \"2290\", \"2012/09/26\", \"$217,500\" ],","    [ \"Jenette Caldwell\", \"Development Lead\", \"New York\", \"1937\", \"2011/09/03\", \"$345,000\" ],","    [ \"Yuri Berry\", \"Chief Marketing Officer (CMO)\", \"New York\", \"6154\", \"2009/06/25\", \"$675,000\" ],","    [ \"Caesar Vance\", \"Pre-Sales Support\", \"New York\", \"8330\", \"2011/12/12\", \"$106,450\" ],","    [ \"Doris Wilder\", \"Sales Assistant\", \"Sidney\", \"3023\", \"2010/09/20\", \"$85,600\" ],","    [ \"Angelica Ramos\", \"Chief Executive Officer (CEO)\", \"London\", \"5797\", \"2009/10/09\", \"$1,200,000\" ],","    [ \"Gavin Joyce\", \"Developer\", \"Edinburgh\", \"8822\", \"2010/12/22\", \"$92,575\" ],","    [ \"Jennifer Chang\", \"Regional Director\", \"Singapore\", \"9239\", \"2010/11/14\", \"$357,650\" ],","    [ \"Brenden Wagner\", \"Software Engineer\", \"San Francisco\", \"1314\", \"2011/06/07\", \"$206,850\" ],","    [ \"Fiona Green\", \"Chief Operating Officer (COO)\", \"San Francisco\", \"2947\", \"2010/03/11\", \"$850,000\" ],","    [ \"Shou Itou\", \"Regional Marketing\", \"Tokyo\", \"8899\", \"2011/08/14\", \"$163,000\" ],","    [ \"Michelle House\", \"Integration Specialist\", \"Sidney\", \"2769\", \"2011/06/02\", \"$95,400\" ],","    [ \"Suki Burks\", \"Developer\", \"London\", \"6832\", \"2009/10/22\", \"$114,500\" ],","    [ \"Prescott Bartlett\", \"Technical Author\", \"London\", \"3606\", \"2011/05/07\", \"$145,000\" ],","    [ \"Gavin Cortez\", \"Team Leader\", \"San Francisco\", \"2860\", \"2008/10/26\", \"$235,500\" ],","    [ \"Martena Mccray\", \"Post-Sales support\", \"Edinburgh\", \"8240\", \"2011/03/09\", \"$324,050\" ],","    [ \"Unity Butler\", \"Marketing Designer\", \"San Francisco\", \"5384\", \"2009/12/09\", \"$85,675\" ]","];"," ","$(document).ready(function() {","    $('#maintable').DataTable( {","        data: dataSet,","        columns: [","            { title: \"Name\" },","            { title: \"Position\" },","            { title: \"Office\" },","            { title: \"Extn.\" },","            { title: \"Start date\" },","            { title: \"Salary\" }","        ]","    } );","} );"],"id":65},{"start":{"row":0,"column":0},"end":{"row":4,"column":4},"action":"insert","lines":["$(document).ready(function() {","    $('#example').DataTable( {","        \"ajax\": '../ajax/data/arrays.txt'","    } );","} );"]}],[{"start":{"row":1,"column":8},"end":{"row":1,"column":15},"action":"remove","lines":["example"],"id":66},{"start":{"row":1,"column":8},"end":{"row":1,"column":9},"action":"insert","lines":["m"]}],[{"start":{"row":1,"column":9},"end":{"row":1,"column":10},"action":"insert","lines":["a"],"id":67}],[{"start":{"row":1,"column":10},"end":{"row":1,"column":11},"action":"insert","lines":["i"],"id":68}],[{"start":{"row":1,"column":11},"end":{"row":1,"column":12},"action":"insert","lines":["t"],"id":69}],[{"start":{"row":1,"column":12},"end":{"row":1,"column":13},"action":"insert","lines":["a"],"id":70}],[{"start":{"row":1,"column":13},"end":{"row":1,"column":14},"action":"insert","lines":["b"],"id":71}],[{"start":{"row":1,"column":14},"end":{"row":1,"column":15},"action":"insert","lines":["l"],"id":72}],[{"start":{"row":1,"column":15},"end":{"row":1,"column":16},"action":"insert","lines":["e"],"id":73}],[{"start":{"row":1,"column":11},"end":{"row":1,"column":12},"action":"insert","lines":["n"],"id":74}],[{"start":{"row":1,"column":4},"end":{"row":3,"column":8},"action":"remove","lines":["$('#maintable').DataTable( {","        \"ajax\": '../ajax/data/arrays.txt'","    } );"],"id":75}],[{"start":{"row":0,"column":0},"end":{"row":2,"column":4},"action":"remove","lines":["$(document).ready(function() {","    ","} );"],"id":76}],[{"start":{"row":0,"column":0},"end":{"row":2,"column":8},"action":"insert","lines":["    $('#maintable').DataTable( {","        \"ajax\" : \"/finddocs/items\"","    } );"],"id":77}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":79}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":80}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"insert","lines":["f"],"id":81}],[{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"insert","lines":["u"],"id":82}],[{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"insert","lines":["c"],"id":83}],[{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"remove","lines":["c"],"id":84}],[{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"insert","lines":["n"],"id":85}],[{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"insert","lines":["c"],"id":86}],[{"start":{"row":0,"column":4},"end":{"row":0,"column":5},"action":"insert","lines":["t"],"id":87}],[{"start":{"row":0,"column":5},"end":{"row":0,"column":6},"action":"insert","lines":["i"],"id":88}],[{"start":{"row":0,"column":6},"end":{"row":0,"column":7},"action":"insert","lines":["o"],"id":89}],[{"start":{"row":0,"column":7},"end":{"row":0,"column":8},"action":"insert","lines":["n"],"id":90}],[{"start":{"row":0,"column":8},"end":{"row":0,"column":9},"action":"insert","lines":[" "],"id":91}],[{"start":{"row":0,"column":9},"end":{"row":0,"column":10},"action":"insert","lines":["t"],"id":92}],[{"start":{"row":0,"column":10},"end":{"row":0,"column":11},"action":"insert","lines":["e"],"id":93}],[{"start":{"row":0,"column":11},"end":{"row":0,"column":12},"action":"insert","lines":["s"],"id":94}],[{"start":{"row":0,"column":12},"end":{"row":0,"column":13},"action":"insert","lines":["t"],"id":95}],[{"start":{"row":0,"column":13},"end":{"row":0,"column":14},"action":"insert","lines":["e"],"id":96}],[{"start":{"row":0,"column":14},"end":{"row":0,"column":15},"action":"insert","lines":["r"],"id":97}],[{"start":{"row":0,"column":15},"end":{"row":0,"column":17},"action":"insert","lines":["()"],"id":98}],[{"start":{"row":0,"column":17},"end":{"row":0,"column":18},"action":"insert","lines":["{"],"id":99}],[{"start":{"row":4,"column":8},"end":{"row":5,"column":0},"action":"insert","lines":["",""],"id":100},{"start":{"row":5,"column":0},"end":{"row":5,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":5,"column":4},"end":{"row":5,"column":5},"action":"insert","lines":["}"],"id":101},{"start":{"row":5,"column":0},"end":{"row":5,"column":4},"action":"remove","lines":["    "]}],[{"start":{"row":3,"column":18},"end":{"row":3,"column":19},"action":"insert","lines":["."],"id":102}],[{"start":{"row":3,"column":19},"end":{"row":3,"column":20},"action":"insert","lines":["."],"id":103}],[{"start":{"row":3,"column":30},"end":{"row":3,"column":35},"action":"remove","lines":["items"],"id":104},{"start":{"row":3,"column":30},"end":{"row":3,"column":31},"action":"insert","lines":["e"]}],[{"start":{"row":3,"column":31},"end":{"row":3,"column":32},"action":"insert","lines":["q"],"id":105}],[{"start":{"row":3,"column":32},"end":{"row":3,"column":33},"action":"insert","lines":["u"],"id":106}],[{"start":{"row":0,"column":0},"end":{"row":5,"column":1},"action":"remove","lines":["function tester(){","","    $('#maintable').DataTable( {","        \"ajax\" : \"../finddocs/equ\"","    } );","}"],"id":133}],[{"start":{"row":0,"column":0},"end":{"row":9,"column":1},"action":"remove","lines":["function tester(){","","    $('#maintable').DataTable( {","        \"processing\": true,","        \"ajax\" : \"../finddocs/equipment\",","        \"columns\": [","            { \"data\": \"name\" },","        ]","    } );","}"],"id":135},{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"insert","lines":["\\"]}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"remove","lines":["\\"],"id":136}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"insert","lines":["v"],"id":137}],[{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"insert","lines":["a"],"id":138}],[{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"insert","lines":["r"],"id":139}],[{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"insert","lines":[" "],"id":140}],[{"start":{"row":0,"column":4},"end":{"row":0,"column":5},"action":"insert","lines":["d"],"id":141}],[{"start":{"row":0,"column":5},"end":{"row":0,"column":6},"action":"insert","lines":["a"],"id":142}],[{"start":{"row":0,"column":6},"end":{"row":0,"column":7},"action":"insert","lines":["t"],"id":143}],[{"start":{"row":0,"column":7},"end":{"row":0,"column":8},"action":"insert","lines":["a"],"id":144}],[{"start":{"row":0,"column":8},"end":{"row":0,"column":9},"action":"insert","lines":["t"],"id":145}],[{"start":{"row":0,"column":9},"end":{"row":0,"column":10},"action":"insert","lines":["a"],"id":146}],[{"start":{"row":0,"column":10},"end":{"row":0,"column":11},"action":"insert","lines":["b"],"id":147}],[{"start":{"row":0,"column":11},"end":{"row":0,"column":12},"action":"insert","lines":["l"],"id":148}],[{"start":{"row":0,"column":12},"end":{"row":0,"column":13},"action":"insert","lines":["e"],"id":149}],[{"start":{"row":0,"column":13},"end":{"row":0,"column":14},"action":"insert","lines":[";"],"id":150}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":0,"column":14},"end":{"row":0,"column":14},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":203,"mode":"ace/mode/javascript"}},"timestamp":1522638450714,"hash":"e00920a87f633dba7ea2f81e278a6f63a1107dd9"}