"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.colors = 'red';
        this.selectedColorIndex = '1';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n  <Page xmlns=\"http://schemas.nativescript.org/tns.xsd\"\n    xmlns:MDL=\"nativescript-materialdropdownlist\">\n\n    <StackLayout>\n        <GridLayout rows=\"auto\" columns=\"*, auto\">\n            <StackLayout>\n                <label text=\"Color\" />\n                <label style=\"height: 3; background-color: gray;\" />\n            </StackLayout>\n\n            <!--Dropdown List widget-->\n            <MDL:MaterialDropdownList col=\"1\" id=\"ddlColors\"\n                itemsSeparatorColor=\"transparent\" itemsRowHeight=\"30\"\n                items=\"{{ colors }}\" selectedIndex=\"{{ selectedColorIndex }}\" >\n            </MDL:MaterialDropdownList>\n        </GridLayout>\n    </StackLayout>\n</Page>\n  ",
            styles: ["\n  @keyframes example {\n    from { background-color: red; }\n    to { background-color: green; }\n}\n.view {\n    animation-name: example;\n    animation-duration: 2s;\n    animation-fill-mode: forwards;\n}\n"]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUF1Q3pFO0lBQ0U7UUFDQSxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsdUJBQWtCLEdBQUcsR0FBRyxDQUFBO0lBRlYsQ0FBQztJQURKLFlBQVk7UUFsQ3hCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsdXRCQW1CVDtZQUNELE1BQU0sRUFBRSxDQUFDLG9OQVVWLENBQUM7U0FDRCxDQUFDOztPQUNXLFlBQVksQ0FNdkI7SUFBRCxtQkFBQztDQUFBLEFBTkYsSUFNRTtBQU5XLG9DQUFZO0FBTXZCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgdGVtcGxhdGU6IGBcbiAgPFBhZ2UgeG1sbnM9XCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcIlxuICAgIHhtbG5zOk1ETD1cIm5hdGl2ZXNjcmlwdC1tYXRlcmlhbGRyb3Bkb3dubGlzdFwiPlxuXG4gICAgPFN0YWNrTGF5b3V0PlxuICAgICAgICA8R3JpZExheW91dCByb3dzPVwiYXV0b1wiIGNvbHVtbnM9XCIqLCBhdXRvXCI+XG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPGxhYmVsIHRleHQ9XCJDb2xvclwiIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPVwiaGVpZ2h0OiAzOyBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1wiIC8+XG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICA8IS0tRHJvcGRvd24gTGlzdCB3aWRnZXQtLT5cbiAgICAgICAgICAgIDxNREw6TWF0ZXJpYWxEcm9wZG93bkxpc3QgY29sPVwiMVwiIGlkPVwiZGRsQ29sb3JzXCJcbiAgICAgICAgICAgICAgICBpdGVtc1NlcGFyYXRvckNvbG9yPVwidHJhbnNwYXJlbnRcIiBpdGVtc1Jvd0hlaWdodD1cIjMwXCJcbiAgICAgICAgICAgICAgICBpdGVtcz1cInt7IGNvbG9ycyB9fVwiIHNlbGVjdGVkSW5kZXg9XCJ7eyBzZWxlY3RlZENvbG9ySW5kZXggfX1cIiA+XG4gICAgICAgICAgICA8L01ETDpNYXRlcmlhbERyb3Bkb3duTGlzdD5cbiAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgIDwvU3RhY2tMYXlvdXQ+XG48L1BhZ2U+XG4gIGAsXG4gIHN0eWxlczogW2BcbiAgQGtleWZyYW1lcyBleGFtcGxlIHtcbiAgICBmcm9tIHsgYmFja2dyb3VuZC1jb2xvcjogcmVkOyB9XG4gICAgdG8geyBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsgfVxufVxuLnZpZXcge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBleGFtcGxlO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcigpe31cbiAgY29sb3JzID0gJ3JlZCc7XG4gIHNlbGVjdGVkQ29sb3JJbmRleCA9ICcxJ1xuXG5cbiB9O1xuIl19