"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[84048],{399838:(e,t,a)=>{a.r(t),a.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-a7174e58","path":"/devices/BWA-1.html","title":"Bosch BWA-1 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Bosch BWA-1 control via MQTT","description":"Integrate your Bosch BWA-1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-03-30T17:14:41.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Water leak (binary)","slug":"water-leak-binary","link":"#water-leak-binary","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Tamper (binary)","slug":"tamper-binary","link":"#tamper-binary","children":[]},{"level":3,"title":"Alarm on motion (binary)","slug":"alarm-on-motion-binary","link":"#alarm-on-motion-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1704999098000},"filePathRelative":"devices/BWA-1.md"}')},355781:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var i=a(166252);const o=(0,i._)("h1",{id:"bosch-bwa-1",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#bosch-bwa-1","aria-hidden":"true"},"#"),(0,i.Uk)(" Bosch BWA-1")],-1),n=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),r=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"BWA-1")],-1),l=(0,i._)("td",null,"Vendor",-1),d=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Zigbee smart water leak detector")],-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"water_leak, battery, tamper, alarm_on_motion, linkquality")],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/BWA-1.jpg",alt:"Bosch BWA-1"})])],-1),h=(0,i._)("h2",{id:"notes",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,i.Uk)(" Notes")],-1),u=(0,i._)("h3",{id:"pairing",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#pairing","aria-hidden":"true"},"#"),(0,i.Uk)(" Pairing")],-1),m=(0,i._)("p",null,'To pair this device you have to install the device via its installation code. The installation code can be obtained by scanning the QR-code on the inside of the battery cover with your smartphone. Then get the device into pairing mode. In zigbee2mqtt navigate to "Settings" --\x3e "Tools" and click on "Add install code". Paste the code you got from the QR-code and confirm by clicking "OK" which will get zigbee2mqtt into pairing mode automatically. Wait for your device to be joined.',-1),p=(0,i.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="water-leak-binary" tabindex="-1"><a class="header-anchor" href="#water-leak-binary" aria-hidden="true">#</a> Water leak (binary)</h3><p>Indicates whether the device detected a water leak. Value can be found in the published state on the <code>water_leak</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> water leak is ON, if <code>false</code> OFF.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="tamper-binary" tabindex="-1"><a class="header-anchor" href="#tamper-binary" aria-hidden="true">#</a> Tamper (binary)</h3><p>Indicates whether the device is tampered. Value can be found in the published state on the <code>tamper</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> tamper is ON, if <code>false</code> OFF.</p><h3 id="alarm-on-motion-binary" tabindex="-1"><a class="header-anchor" href="#alarm-on-motion-binary" aria-hidden="true">#</a> Alarm on motion (binary)</h3><p>Enable/Disable sound alarm on motion. Value can be found in the published state on the <code>alarm_on_motion</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;alarm_on_motion&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_on_motion&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> alarm on motion is ON, if <code>OFF</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',11),b={},y=(0,a(983744).Z)(b,[["render",function(e,t){const a=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),o,(0,i._)("table",null,[n,(0,i._)("tbody",null,[r,(0,i._)("tr",null,[l,(0,i._)("td",null,[(0,i.Wm)(a,{to:"/supported-devices/#v=Bosch"},{default:(0,i.w5)((()=>[(0,i.Uk)("Bosch")])),_:1})])]),d,c,s])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),h,u,m,(0,i.kq)(" Notes END: Do not edit below this line "),p])}]])}}]);