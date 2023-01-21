
  var renderAll = false
  var nodes = new vis.DataSet([{"id":"root.BaseVPC","dependencies":[],"prefix":"root","hidden":false,"type":"AWS::EC2::VPC","label":"BaseVPC","shape":"image","image":"data:image/svg+xml;charset=utf-8,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20width%3D%2280px%22%20height%3D%2280px%22%20viewBox%3D%220%200%2080%2080%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3C!--%20Generator%3A%20Sketch%2064%20(93537)%20-%20https%3A%2F%2Fsketch.com%20--%3E%0A%20%20%20%20%3Ctitle%3EIcon-Architecture%2F64%2FArch_Amazon-EC2_64%3C%2Ftitle%3E%0A%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3ClinearGradient%20x1%3D%220%25%22%20y1%3D%22100%25%22%20x2%3D%22100%25%22%20y2%3D%220%25%22%20id%3D%22linearGradient-1%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cstop%20stop-color%3D%22%23C8511B%22%20offset%3D%220%25%22%3E%3C%2Fstop%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cstop%20stop-color%3D%22%23FF9900%22%20offset%3D%22100%25%22%3E%3C%2Fstop%3E%0A%20%20%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Cg%20id%3D%22Icon-Architecture%2F64%2FArch_Amazon-EC2_64%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0A%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Icon-Architecture-BG%2F64%2FCompute%22%20fill%3D%22url(%23linearGradient-1)%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Crect%20id%3D%22Rectangle%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2280%22%20height%3D%2280%22%3E%3C%2Frect%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M27%2C53%20L52%2C53%20L52%2C28%20L27%2C28%20L27%2C53%20Z%20M54%2C28%20L58%2C28%20L58%2C30%20L54%2C30%20L54%2C34%20L58%2C34%20L58%2C36%20L54%2C36%20L54%2C39%20L58%2C39%20L58%2C41%20L54%2C41%20L54%2C45%20L58%2C45%20L58%2C47%20L54%2C47%20L54%2C51%20L58%2C51%20L58%2C53%20L54%2C53%20L54%2C53.136%20C54%2C54.164%2053.164%2C55%2052.136%2C55%20L52%2C55%20L52%2C59%20L50%2C59%20L50%2C55%20L46%2C55%20L46%2C59%20L44%2C59%20L44%2C55%20L41%2C55%20L41%2C59%20L39%2C59%20L39%2C55%20L35%2C55%20L35%2C59%20L33%2C59%20L33%2C55%20L29%2C55%20L29%2C59%20L27%2C59%20L27%2C55%20L26.864%2C55%20C25.836%2C55%2025%2C54.164%2025%2C53.136%20L25%2C53%20L22%2C53%20L22%2C51%20L25%2C51%20L25%2C47%20L22%2C47%20L22%2C45%20L25%2C45%20L25%2C41%20L22%2C41%20L22%2C39%20L25%2C39%20L25%2C36%20L22%2C36%20L22%2C34%20L25%2C34%20L25%2C30%20L22%2C30%20L22%2C28%20L25%2C28%20L25%2C27.864%20C25%2C26.836%2025.836%2C26%2026.864%2C26%20L27%2C26%20L27%2C22%20L29%2C22%20L29%2C26%20L33%2C26%20L33%2C22%20L35%2C22%20L35%2C26%20L39%2C26%20L39%2C22%20L41%2C22%20L41%2C26%20L44%2C26%20L44%2C22%20L46%2C22%20L46%2C26%20L50%2C26%20L50%2C22%20L52%2C22%20L52%2C26%20L52.136%2C26%20C53.164%2C26%2054%2C26.836%2054%2C27.864%20L54%2C28%20Z%20M41%2C65.876%20C41%2C65.944%2040.944%2C66%2040.876%2C66%20L14.124%2C66%20C14.056%2C66%2014%2C65.944%2014%2C65.876%20L14%2C39.124%20C14%2C39.056%2014.056%2C39%2014.124%2C39%20L20%2C39%20L20%2C37%20L14.124%2C37%20C12.953%2C37%2012%2C37.953%2012%2C39.124%20L12%2C65.876%20C12%2C67.047%2012.953%2C68%2014.124%2C68%20L40.876%2C68%20C42.047%2C68%2043%2C67.047%2043%2C65.876%20L43%2C61%20L41%2C61%20L41%2C65.876%20Z%20M68%2C14.124%20L68%2C40.876%20C68%2C42.047%2067.047%2C43%2065.876%2C43%20L60%2C43%20L60%2C41%20L65.876%2C41%20C65.944%2C41%2066%2C40.944%2066%2C40.876%20L66%2C14.124%20C66%2C14.056%2065.944%2C14%2065.876%2C14%20L39.124%2C14%20C39.056%2C14%2039%2C14.056%2039%2C14.124%20L39%2C20%20L37%2C20%20L37%2C14.124%20C37%2C12.953%2037.953%2C12%2039.124%2C12%20L65.876%2C12%20C67.047%2C12%2068%2C12.953%2068%2C14.124%20L68%2C14.124%20Z%22%20id%3D%22Amazon-EC2_Icon_64_Squid%22%20fill%3D%22%23FFFFFF%22%3E%3C%2Fpath%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E","title":"Type: 'AWS::EC2::VPC'\nProperties:\n  CidrBlock: 10.0.0.0/24\n  EnableDnsHostnames: true\n  EnableDnsSupport: true\n  InstanceTenancy: default\n","resource":{"Type":"AWS::EC2::VPC","Properties":{"CidrBlock":"10.0.0.0/24","EnableDnsHostnames":true,"EnableDnsSupport":true,"InstanceTenancy":"default"}}}]);
  var edges = new vis.DataSet([]);
  var nested = [];
  var types = ["AWS::EC2::VPC"];
  var showSidebar = true;
  