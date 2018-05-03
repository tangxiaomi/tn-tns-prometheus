import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

import { Color } from "color";
import { View } from "ui/core/view";

@Component({
  selector: "my-app",
  template: `
  <Page xmlns="http://schemas.nativescript.org/tns.xsd"
    xmlns:MDL="nativescript-materialdropdownlist">

    <StackLayout>
        <GridLayout rows="auto" columns="*, auto">
            <StackLayout>
                <label text="Color" />
                <label style="height: 3; background-color: gray;" />
            </StackLayout>

            <!--Dropdown List widget-->
            <MDL:MaterialDropdownList col="1" id="ddlColors"
                itemsSeparatorColor="transparent" itemsRowHeight="30"
                items="{{ colors }}" selectedIndex="{{ selectedColorIndex }}" >
            </MDL:MaterialDropdownList>
        </GridLayout>
    </StackLayout>
</Page>
  `,
  styles: [`
  @keyframes example {
    from { background-color: red; }
    to { background-color: green; }
}
.view {
    animation-name: example;
    animation-duration: 2s;
    animation-fill-mode: forwards;
}
`]
})
export class AppComponent {
  constructor(){}
  colors = 'red';
  selectedColorIndex = '1'


 };
