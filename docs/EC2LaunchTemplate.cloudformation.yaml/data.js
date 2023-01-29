
  var renderAll = false
  var nodes = new vis.DataSet([{"id":"root.LaunchTemplateRole","dependencies":[{"key":"Ref","value":["iam  aws\npolicy/amazonssmmanagedinstancecore"],"path":"$.Properties.ManagedPolicyArns"}],"prefix":"root","hidden":false,"type":"AWS::IAM::Role","label":"LaunchTemplateRole","shape":"image","image":"data:image/svg+xml;charset=utf-8,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20width%3D%2280px%22%20height%3D%2280px%22%20viewBox%3D%220%200%2080%2080%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3C!--%20Generator%3A%20Sketch%2064%20(93537)%20-%20https%3A%2F%2Fsketch.com%20--%3E%0A%20%20%20%20%3Ctitle%3EIcon-Architecture%2F64%2FArch_AWS-Identity-and-Access-Management_64%3C%2Ftitle%3E%0A%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3ClinearGradient%20x1%3D%220%25%22%20y1%3D%22100%25%22%20x2%3D%22100%25%22%20y2%3D%220%25%22%20id%3D%22linearGradient-1%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cstop%20stop-color%3D%22%23BD0816%22%20offset%3D%220%25%22%3E%3C%2Fstop%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cstop%20stop-color%3D%22%23FF5252%22%20offset%3D%22100%25%22%3E%3C%2Fstop%3E%0A%20%20%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Cg%20id%3D%22Icon-Architecture%2F64%2FArch_AWS-Identity-and-Access-Management_64%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0A%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Icon-Architecture-BG%2F64%2FSecurity-Identity-Compliance%22%20fill%3D%22url(%23linearGradient-1)%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Crect%20id%3D%22Rectangle%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2280%22%20height%3D%2280%22%3E%3C%2Frect%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M14%2C59%20L66%2C59%20L66%2C21%20L14%2C21%20L14%2C59%20Z%20M68%2C20%20L68%2C60%20C68%2C60.552%2067.553%2C61%2067%2C61%20L13%2C61%20C12.447%2C61%2012%2C60.552%2012%2C60%20L12%2C20%20C12%2C19.448%2012.447%2C19%2013%2C19%20L67%2C19%20C67.553%2C19%2068%2C19.448%2068%2C20%20L68%2C20%20Z%20M44%2C48%20L59%2C48%20L59%2C46%20L44%2C46%20L44%2C48%20Z%20M57%2C42%20L62%2C42%20L62%2C40%20L57%2C40%20L57%2C42%20Z%20M44%2C42%20L52%2C42%20L52%2C40%20L44%2C40%20L44%2C42%20Z%20M29%2C46%20C29%2C45.449%2028.552%2C45%2028%2C45%20C27.448%2C45%2027%2C45.449%2027%2C46%20C27%2C46.551%2027.448%2C47%2028%2C47%20C28.552%2C47%2029%2C46.551%2029%2C46%20L29%2C46%20Z%20M31%2C46%20C31%2C47.302%2030.161%2C48.401%2029%2C48.816%20L29%2C51%20L27%2C51%20L27%2C48.815%20C25.839%2C48.401%2025%2C47.302%2025%2C46%20C25%2C44.346%2026.346%2C43%2028%2C43%20C29.654%2C43%2031%2C44.346%2031%2C46%20L31%2C46%20Z%20M19%2C53.993%20L36.994%2C54%20L36.996%2C50%20L33%2C50%20L33%2C48%20L36.996%2C48%20L36.998%2C45%20L33%2C45%20L33%2C43%20L36.999%2C43%20L37%2C40.007%20L19.006%2C40%20L19%2C53.993%20Z%20M22%2C38.001%20L34%2C38.006%20L34%2C31%20C34.001%2C28.697%2031.197%2C26.677%2028%2C26.675%20L27.996%2C26.675%20C24.804%2C26.675%2022.004%2C28.696%2022.002%2C31%20L22%2C38.001%20Z%20M17%2C54.992%20L17.006%2C39%20C17.006%2C38.734%2017.111%2C38.48%2017.299%2C38.292%20C17.486%2C38.105%2017.741%2C38%2018.006%2C38%20L20%2C38.001%20L20.002%2C31%20C20.004%2C27.512%2023.59%2C24.675%2027.996%2C24.675%20L28%2C24.675%20C32.412%2C24.677%2036.001%2C27.515%2036%2C31%20L36%2C38.007%20L38%2C38.008%20C38.553%2C38.008%2039%2C38.456%2039%2C39.008%20L38.994%2C55%20C38.994%2C55.266%2038.889%2C55.52%2038.701%2C55.708%20C38.514%2C55.895%2038.259%2C56%2037.994%2C56%20L18%2C55.992%20C17.447%2C55.992%2017%2C55.544%2017%2C54.992%20L17%2C54.992%20Z%20M60%2C36%20L62%2C36%20L62%2C34%20L60%2C34%20L60%2C36%20Z%20M44%2C36%20L55%2C36%20L55%2C34%20L44%2C34%20L44%2C36%20Z%22%20id%3D%22AWS-Identity-and-Access-Management_Icon_64_Squid%22%20fill%3D%22%23FFFFFF%22%3E%3C%2Fpath%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E","title":"Type: 'AWS::IAM::Role'\nProperties:\n  AssumeRolePolicyDocument:\n    Version: 2012-10-17\n    Statement:\n      - Action: 'sts:AssumeRole'\n        Effect: Allow\n        Principal:\n          Service: ec2.amazonaws.com\n  ManagedPolicyArns:\n    - !!Ref |-\n      iam  aws\n      policy/amazonssmmanagedinstancecore\n","resource":{"Type":"AWS::IAM::Role","Properties":{"AssumeRolePolicyDocument":{"Version":"2012-10-17","Statement":[{"Action":"sts:AssumeRole","Effect":"Allow","Principal":{"Service":"ec2.amazonaws.com"}}]},"ManagedPolicyArns":[{"Ref":"iam  aws\npolicy/amazonssmmanagedinstancecore"}]}}},{"id":"root.LaunchTemplateInstanceProfile","dependencies":[{"key":"Ref","value":["LaunchTemplateRole"],"path":"$.Properties.Roles"}],"prefix":"root","hidden":false,"type":"AWS::IAM::InstanceProfile","label":"LaunchTemplateInstanceProfile","shape":"image","image":"data:image/svg+xml;charset=utf-8,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20width%3D%2280px%22%20height%3D%2280px%22%20viewBox%3D%220%200%2080%2080%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3C!--%20Generator%3A%20Sketch%2064%20(93537)%20-%20https%3A%2F%2Fsketch.com%20--%3E%0A%20%20%20%20%3Ctitle%3EIcon-Architecture%2F64%2FArch_AWS-Identity-and-Access-Management_64%3C%2Ftitle%3E%0A%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3ClinearGradient%20x1%3D%220%25%22%20y1%3D%22100%25%22%20x2%3D%22100%25%22%20y2%3D%220%25%22%20id%3D%22linearGradient-1%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cstop%20stop-color%3D%22%23BD0816%22%20offset%3D%220%25%22%3E%3C%2Fstop%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cstop%20stop-color%3D%22%23FF5252%22%20offset%3D%22100%25%22%3E%3C%2Fstop%3E%0A%20%20%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Cg%20id%3D%22Icon-Architecture%2F64%2FArch_AWS-Identity-and-Access-Management_64%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0A%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Icon-Architecture-BG%2F64%2FSecurity-Identity-Compliance%22%20fill%3D%22url(%23linearGradient-1)%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Crect%20id%3D%22Rectangle%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2280%22%20height%3D%2280%22%3E%3C%2Frect%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M14%2C59%20L66%2C59%20L66%2C21%20L14%2C21%20L14%2C59%20Z%20M68%2C20%20L68%2C60%20C68%2C60.552%2067.553%2C61%2067%2C61%20L13%2C61%20C12.447%2C61%2012%2C60.552%2012%2C60%20L12%2C20%20C12%2C19.448%2012.447%2C19%2013%2C19%20L67%2C19%20C67.553%2C19%2068%2C19.448%2068%2C20%20L68%2C20%20Z%20M44%2C48%20L59%2C48%20L59%2C46%20L44%2C46%20L44%2C48%20Z%20M57%2C42%20L62%2C42%20L62%2C40%20L57%2C40%20L57%2C42%20Z%20M44%2C42%20L52%2C42%20L52%2C40%20L44%2C40%20L44%2C42%20Z%20M29%2C46%20C29%2C45.449%2028.552%2C45%2028%2C45%20C27.448%2C45%2027%2C45.449%2027%2C46%20C27%2C46.551%2027.448%2C47%2028%2C47%20C28.552%2C47%2029%2C46.551%2029%2C46%20L29%2C46%20Z%20M31%2C46%20C31%2C47.302%2030.161%2C48.401%2029%2C48.816%20L29%2C51%20L27%2C51%20L27%2C48.815%20C25.839%2C48.401%2025%2C47.302%2025%2C46%20C25%2C44.346%2026.346%2C43%2028%2C43%20C29.654%2C43%2031%2C44.346%2031%2C46%20L31%2C46%20Z%20M19%2C53.993%20L36.994%2C54%20L36.996%2C50%20L33%2C50%20L33%2C48%20L36.996%2C48%20L36.998%2C45%20L33%2C45%20L33%2C43%20L36.999%2C43%20L37%2C40.007%20L19.006%2C40%20L19%2C53.993%20Z%20M22%2C38.001%20L34%2C38.006%20L34%2C31%20C34.001%2C28.697%2031.197%2C26.677%2028%2C26.675%20L27.996%2C26.675%20C24.804%2C26.675%2022.004%2C28.696%2022.002%2C31%20L22%2C38.001%20Z%20M17%2C54.992%20L17.006%2C39%20C17.006%2C38.734%2017.111%2C38.48%2017.299%2C38.292%20C17.486%2C38.105%2017.741%2C38%2018.006%2C38%20L20%2C38.001%20L20.002%2C31%20C20.004%2C27.512%2023.59%2C24.675%2027.996%2C24.675%20L28%2C24.675%20C32.412%2C24.677%2036.001%2C27.515%2036%2C31%20L36%2C38.007%20L38%2C38.008%20C38.553%2C38.008%2039%2C38.456%2039%2C39.008%20L38.994%2C55%20C38.994%2C55.266%2038.889%2C55.52%2038.701%2C55.708%20C38.514%2C55.895%2038.259%2C56%2037.994%2C56%20L18%2C55.992%20C17.447%2C55.992%2017%2C55.544%2017%2C54.992%20L17%2C54.992%20Z%20M60%2C36%20L62%2C36%20L62%2C34%20L60%2C34%20L60%2C36%20Z%20M44%2C36%20L55%2C36%20L55%2C34%20L44%2C34%20L44%2C36%20Z%22%20id%3D%22AWS-Identity-and-Access-Management_Icon_64_Squid%22%20fill%3D%22%23FFFFFF%22%3E%3C%2Fpath%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E","title":"Type: 'AWS::IAM::InstanceProfile'\nProperties:\n  InstanceProfileName: !!Sub '${AWS::StackName}-EC2-LaunchTemplate-InstanceProfile'\n  Roles:\n    - !!Ref LaunchTemplateRole\n","resource":{"Type":"AWS::IAM::InstanceProfile","Properties":{"InstanceProfileName":{"Fn::Sub":"${AWS::StackName}-EC2-LaunchTemplate-InstanceProfile"},"Roles":[{"Ref":"LaunchTemplateRole"}]}}},{"id":"root.LaunchTemplate","dependencies":[{"key":"Ref","value":[],"path":"$.Properties.LaunchTemplateData.BlockDeviceMappings.Ebs.VolumeSize"},{"key":"Ref","value":[],"path":"$.Properties.LaunchTemplateData.ImageId"},{"key":"Ref","value":[],"path":"$.Properties.LaunchTemplateData.InstanceType"},{"key":"Ref","value":[],"path":"$.Properties.LaunchTemplateData.SecurityGroupIds"},{"key":"Fn::GetAtt","value":["LaunchTemplateInstanceProfile"],"path":"$.Properties.LaunchTemplateData.IamInstanceProfile.Arn"}],"prefix":"root","hidden":false,"type":"AWS::EC2::LaunchTemplate","label":"LaunchTemplate","shape":"image","image":"data:image/svg+xml;charset=utf-8,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20width%3D%2280px%22%20height%3D%2280px%22%20viewBox%3D%220%200%2080%2080%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3C!--%20Generator%3A%20Sketch%2064%20(93537)%20-%20https%3A%2F%2Fsketch.com%20--%3E%0A%20%20%20%20%3Ctitle%3EIcon-Architecture%2F64%2FArch_Amazon-EC2_64%3C%2Ftitle%3E%0A%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3ClinearGradient%20x1%3D%220%25%22%20y1%3D%22100%25%22%20x2%3D%22100%25%22%20y2%3D%220%25%22%20id%3D%22linearGradient-1%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cstop%20stop-color%3D%22%23C8511B%22%20offset%3D%220%25%22%3E%3C%2Fstop%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cstop%20stop-color%3D%22%23FF9900%22%20offset%3D%22100%25%22%3E%3C%2Fstop%3E%0A%20%20%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Cg%20id%3D%22Icon-Architecture%2F64%2FArch_Amazon-EC2_64%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0A%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Icon-Architecture-BG%2F64%2FCompute%22%20fill%3D%22url(%23linearGradient-1)%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Crect%20id%3D%22Rectangle%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2280%22%20height%3D%2280%22%3E%3C%2Frect%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M27%2C53%20L52%2C53%20L52%2C28%20L27%2C28%20L27%2C53%20Z%20M54%2C28%20L58%2C28%20L58%2C30%20L54%2C30%20L54%2C34%20L58%2C34%20L58%2C36%20L54%2C36%20L54%2C39%20L58%2C39%20L58%2C41%20L54%2C41%20L54%2C45%20L58%2C45%20L58%2C47%20L54%2C47%20L54%2C51%20L58%2C51%20L58%2C53%20L54%2C53%20L54%2C53.136%20C54%2C54.164%2053.164%2C55%2052.136%2C55%20L52%2C55%20L52%2C59%20L50%2C59%20L50%2C55%20L46%2C55%20L46%2C59%20L44%2C59%20L44%2C55%20L41%2C55%20L41%2C59%20L39%2C59%20L39%2C55%20L35%2C55%20L35%2C59%20L33%2C59%20L33%2C55%20L29%2C55%20L29%2C59%20L27%2C59%20L27%2C55%20L26.864%2C55%20C25.836%2C55%2025%2C54.164%2025%2C53.136%20L25%2C53%20L22%2C53%20L22%2C51%20L25%2C51%20L25%2C47%20L22%2C47%20L22%2C45%20L25%2C45%20L25%2C41%20L22%2C41%20L22%2C39%20L25%2C39%20L25%2C36%20L22%2C36%20L22%2C34%20L25%2C34%20L25%2C30%20L22%2C30%20L22%2C28%20L25%2C28%20L25%2C27.864%20C25%2C26.836%2025.836%2C26%2026.864%2C26%20L27%2C26%20L27%2C22%20L29%2C22%20L29%2C26%20L33%2C26%20L33%2C22%20L35%2C22%20L35%2C26%20L39%2C26%20L39%2C22%20L41%2C22%20L41%2C26%20L44%2C26%20L44%2C22%20L46%2C22%20L46%2C26%20L50%2C26%20L50%2C22%20L52%2C22%20L52%2C26%20L52.136%2C26%20C53.164%2C26%2054%2C26.836%2054%2C27.864%20L54%2C28%20Z%20M41%2C65.876%20C41%2C65.944%2040.944%2C66%2040.876%2C66%20L14.124%2C66%20C14.056%2C66%2014%2C65.944%2014%2C65.876%20L14%2C39.124%20C14%2C39.056%2014.056%2C39%2014.124%2C39%20L20%2C39%20L20%2C37%20L14.124%2C37%20C12.953%2C37%2012%2C37.953%2012%2C39.124%20L12%2C65.876%20C12%2C67.047%2012.953%2C68%2014.124%2C68%20L40.876%2C68%20C42.047%2C68%2043%2C67.047%2043%2C65.876%20L43%2C61%20L41%2C61%20L41%2C65.876%20Z%20M68%2C14.124%20L68%2C40.876%20C68%2C42.047%2067.047%2C43%2065.876%2C43%20L60%2C43%20L60%2C41%20L65.876%2C41%20C65.944%2C41%2066%2C40.944%2066%2C40.876%20L66%2C14.124%20C66%2C14.056%2065.944%2C14%2065.876%2C14%20L39.124%2C14%20C39.056%2C14%2039%2C14.056%2039%2C14.124%20L39%2C20%20L37%2C20%20L37%2C14.124%20C37%2C12.953%2037.953%2C12%2039.124%2C12%20L65.876%2C12%20C67.047%2C12%2068%2C12.953%2068%2C14.124%20L68%2C14.124%20Z%22%20id%3D%22Amazon-EC2_Icon_64_Squid%22%20fill%3D%22%23FFFFFF%22%3E%3C%2Fpath%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E","title":"Type: 'AWS::EC2::LaunchTemplate'\nProperties:\n  LaunchTemplateName: !!Sub '${AWS::StackName}-EC2-LaunchTemplate'\n  LaunchTemplateData:\n    InstanceMarketOptions:\n      MarketType: spot\n    BlockDeviceMappings:\n      - Ebs:\n          VolumeSize: !!Ref EBSVolumeSize\n          VolumeType: gp2\n          DeleteOnTermination: true\n          Encrypted: true\n        DeviceName: /dev/xvda\n    Monitoring:\n      Enabled: true\n    ImageId: !!Ref InstanceAmiId\n    InstanceType: !!Ref InstanceType\n    SecurityGroupIds: !!Ref SecurityGroupIds\n    IamInstanceProfile:\n      Arn: !!GetAtt LaunchTemplateInstanceProfile.Arn\n","resource":{"Type":"AWS::EC2::LaunchTemplate","Properties":{"LaunchTemplateName":{"Fn::Sub":"${AWS::StackName}-EC2-LaunchTemplate"},"LaunchTemplateData":{"InstanceMarketOptions":{"MarketType":"spot"},"BlockDeviceMappings":[{"Ebs":{"VolumeSize":{"Ref":"EBSVolumeSize"},"VolumeType":"gp2","DeleteOnTermination":true,"Encrypted":true},"DeviceName":"/dev/xvda"}],"Monitoring":{"Enabled":true},"ImageId":{"Ref":"InstanceAmiId"},"InstanceType":{"Ref":"InstanceType"},"SecurityGroupIds":{"Ref":"SecurityGroupIds"},"IamInstanceProfile":{"Arn":{"Fn::GetAtt":["LaunchTemplateInstanceProfile","Arn"]}}}}}},{"id":"root.iam  aws\npolicy/amazonssmmanagedinstancecore","dependencies":[],"prefix":"root","hidden":false,"type":"External resource (aws::iam::policy)","label":"iam  aws\npolicy/amazonssmmanagedinstancecore","shape":"image","image":"data:image/svg+xml;charset=utf-8,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20width%3D%2280px%22%20height%3D%2280px%22%20viewBox%3D%220%200%2080%2080%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3C!--%20Generator%3A%20Sketch%2064%20(93537)%20-%20https%3A%2F%2Fsketch.com%20--%3E%0A%20%20%20%20%3Ctitle%3EIcon-Architecture%2F64%2FArch_AWS-Identity-and-Access-Management_64%3C%2Ftitle%3E%0A%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3ClinearGradient%20x1%3D%220%25%22%20y1%3D%22100%25%22%20x2%3D%22100%25%22%20y2%3D%220%25%22%20id%3D%22linearGradient-1%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cstop%20stop-color%3D%22%23BD0816%22%20offset%3D%220%25%22%3E%3C%2Fstop%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cstop%20stop-color%3D%22%23FF5252%22%20offset%3D%22100%25%22%3E%3C%2Fstop%3E%0A%20%20%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Cg%20id%3D%22Icon-Architecture%2F64%2FArch_AWS-Identity-and-Access-Management_64%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0A%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Icon-Architecture-BG%2F64%2FSecurity-Identity-Compliance%22%20fill%3D%22url(%23linearGradient-1)%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Crect%20id%3D%22Rectangle%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2280%22%20height%3D%2280%22%3E%3C%2Frect%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M14%2C59%20L66%2C59%20L66%2C21%20L14%2C21%20L14%2C59%20Z%20M68%2C20%20L68%2C60%20C68%2C60.552%2067.553%2C61%2067%2C61%20L13%2C61%20C12.447%2C61%2012%2C60.552%2012%2C60%20L12%2C20%20C12%2C19.448%2012.447%2C19%2013%2C19%20L67%2C19%20C67.553%2C19%2068%2C19.448%2068%2C20%20L68%2C20%20Z%20M44%2C48%20L59%2C48%20L59%2C46%20L44%2C46%20L44%2C48%20Z%20M57%2C42%20L62%2C42%20L62%2C40%20L57%2C40%20L57%2C42%20Z%20M44%2C42%20L52%2C42%20L52%2C40%20L44%2C40%20L44%2C42%20Z%20M29%2C46%20C29%2C45.449%2028.552%2C45%2028%2C45%20C27.448%2C45%2027%2C45.449%2027%2C46%20C27%2C46.551%2027.448%2C47%2028%2C47%20C28.552%2C47%2029%2C46.551%2029%2C46%20L29%2C46%20Z%20M31%2C46%20C31%2C47.302%2030.161%2C48.401%2029%2C48.816%20L29%2C51%20L27%2C51%20L27%2C48.815%20C25.839%2C48.401%2025%2C47.302%2025%2C46%20C25%2C44.346%2026.346%2C43%2028%2C43%20C29.654%2C43%2031%2C44.346%2031%2C46%20L31%2C46%20Z%20M19%2C53.993%20L36.994%2C54%20L36.996%2C50%20L33%2C50%20L33%2C48%20L36.996%2C48%20L36.998%2C45%20L33%2C45%20L33%2C43%20L36.999%2C43%20L37%2C40.007%20L19.006%2C40%20L19%2C53.993%20Z%20M22%2C38.001%20L34%2C38.006%20L34%2C31%20C34.001%2C28.697%2031.197%2C26.677%2028%2C26.675%20L27.996%2C26.675%20C24.804%2C26.675%2022.004%2C28.696%2022.002%2C31%20L22%2C38.001%20Z%20M17%2C54.992%20L17.006%2C39%20C17.006%2C38.734%2017.111%2C38.48%2017.299%2C38.292%20C17.486%2C38.105%2017.741%2C38%2018.006%2C38%20L20%2C38.001%20L20.002%2C31%20C20.004%2C27.512%2023.59%2C24.675%2027.996%2C24.675%20L28%2C24.675%20C32.412%2C24.677%2036.001%2C27.515%2036%2C31%20L36%2C38.007%20L38%2C38.008%20C38.553%2C38.008%2039%2C38.456%2039%2C39.008%20L38.994%2C55%20C38.994%2C55.266%2038.889%2C55.52%2038.701%2C55.708%20C38.514%2C55.895%2038.259%2C56%2037.994%2C56%20L18%2C55.992%20C17.447%2C55.992%2017%2C55.544%2017%2C54.992%20L17%2C54.992%20Z%20M60%2C36%20L62%2C36%20L62%2C34%20L60%2C34%20L60%2C36%20Z%20M44%2C36%20L55%2C36%20L55%2C34%20L44%2C34%20L44%2C36%20Z%22%20id%3D%22AWS-Identity-and-Access-Management_Icon_64_Squid%22%20fill%3D%22%23FFFFFF%22%3E%3C%2Fpath%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E","title":"Type: 'External resource (aws::iam::policy)'\n","resource":{"Type":"External resource (aws::iam::policy)"}}]);
  var edges = new vis.DataSet([{"from":"root.LaunchTemplateRole","to":"root.iam  aws\npolicy/amazonssmmanagedinstancecore","label":"ManagedPolicyArns","color":{"color":"#d279ce"}},{"from":"root.LaunchTemplateInstanceProfile","to":"root.LaunchTemplateRole","label":"Roles","color":{"color":"#421f93"}},{"from":"root.LaunchTemplate","to":"root.LaunchTemplateInstanceProfile","label":"Arn","color":{"color":"#d279af"}}]);
  var nested = [];
  var types = ["AWS::EC2::LaunchTemplate","AWS::IAM::InstanceProfile","AWS::IAM::Role","External resource (aws::iam::policy)"];
  var showSidebar = true;
  