"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[95190],{307291:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-ac357388","path":"/devices/ptvo_counter_2ch.html","title":"Custom devices (DiY) ptvo_counter_2ch control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Custom devices (DiY) ptvo_counter_2ch control via MQTT","description":"Integrate your Custom devices (DiY) ptvo_counter_2ch via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-11-07T00:31:40.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Build guide","slug":"build-guide","link":"#build-guide","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"L3 (enum)","slug":"l3-enum","link":"#l3-enum","children":[]},{"level":3,"title":"L5 (enum)","slug":"l5-enum","link":"#l5-enum","children":[]},{"level":3,"title":"Switch (l6 endpoint)","slug":"switch-l6-endpoint","link":"#switch-l6-endpoint","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1704999098000},"filePathRelative":"devices/ptvo_counter_2ch.md"}')},955615:(e,t,o)=>{o.r(t),o.d(t,{default:()=>g});var i=o(166252);const a=(0,i._)("h1",{id:"custom-devices-diy-ptvo-counter-2ch",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#custom-devices-diy-ptvo-counter-2ch","aria-hidden":"true"},"#"),(0,i.Uk)(" Custom devices (DiY) ptvo_counter_2ch")],-1),d=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),n=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"ptvo_counter_2ch")],-1),l=(0,i._)("td",null,"Vendor",-1),u=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"2 channel counter")],-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"battery, l3, l5, switch (state), voltage, linkquality")],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ptvo_counter_2ch.jpg",alt:"Custom devices (DiY) ptvo_counter_2ch"})])],-1),r=(0,i._)("h2",{id:"notes",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,i.Uk)(" Notes")],-1),h=(0,i._)("h3",{id:"build-guide",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#build-guide","aria-hidden":"true"},"#"),(0,i.Uk)(" Build guide")],-1),p={href:"https://dzen.ru/a/ZUnKTY3_Dkue45gb",target:"_blank",rel:"noopener noreferrer"},m=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),v=(0,i.uE)('<ul><li><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="l3-enum" tabindex="-1"><a class="header-anchor" href="#l3-enum" aria-hidden="true">#</a> L3 (enum)</h3><p>Counter value. Write zero or positive value to set a counter value. Write a negative value to set a wakeup interval in minutes. Value can be found in the published state on the <code>l3</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;l3&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;l3&quot;: NEW_VALUE}</code>. The possible values are: <code>set</code>.</p><h3 id="l5-enum" tabindex="-1"><a class="header-anchor" href="#l5-enum" aria-hidden="true">#</a> L5 (enum)</h3><p>Counter value. Write zero or positive value to set a counter value. Write a negative value to set a wakeup interval in minutes. Value can be found in the published state on the <code>l5</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;l5&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;l5&quot;: NEW_VALUE}</code>. The possible values are: <code>set</code>.</p><h3 id="switch-l6-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l6-endpoint" aria-hidden="true">#</a> Switch (l6 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l6</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l6&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l6&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l6&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l6&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off" aria-hidden="true">#</a> On with timed off</h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionnaly an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depend on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',16),_={},g=(0,o(983744).Z)(_,[["render",function(e,t){const o=(0,i.up)("RouterLink"),_=(0,i.up)("ExternalLinkIcon");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),a,(0,i._)("table",null,[d,(0,i._)("tbody",null,[n,(0,i._)("tr",null,[l,(0,i._)("td",null,[(0,i.Wm)(o,{to:"/supported-devices/#v=Custom%20devices%20(DiY)"},{default:(0,i.w5)((()=>[(0,i.Uk)("Custom devices (DiY)")])),_:1})])]),u,c,s])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),r,h,(0,i._)("p",null,[(0,i.Uk)("Instructions on how to build this device, configure firmware can be found "),(0,i._)("a",p,[(0,i.Uk)("here"),(0,i.Wm)(_)])]),(0,i.kq)(" Notes END: Do not edit below this line "),m,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[(0,i.Uk)("How to use device type specific configuration")])),_:1})])]),v])}]])}}]);