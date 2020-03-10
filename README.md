# NgxEditorCustom



## Fix problem with build
```
# npm i
# npm rebuild node-sass 
# npm uninstall -g angular-cli @angular/cli
# npm cache clean --force
# npm install -g @angular/cli@6
```

### Installation

Install via Package managers such as [npm][npm] or [yarn][yarn]

```bash
npm install ngx-editor-custom --save
```

### Usage

Import `ngx-editor-custom` module

```typescript
import { NgxEditorCustomModule } from 'ngx-editor-custom';

@NgModule({
  imports: [ NgxEditorCustomModule ]
})
```

Import [font-awesome](https://github.com/FortAwesome/Font-Awesome) into your application

Then in HTML

```html
<app-ngx-editor-custom [placeholder]="'Enter text here...'" [spellcheck]="true" [(ngModel)]="htmlContent"></app-ngx-editor-custom>
```

For `ngModel` to work, You must import `FormsModule` from `@angular/forms`

#### PeerDependencies

`ngx-editor-custom` depeneds on the following libraries to work.


## Compatibility

All Evergreen-Browsers are supported

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Opera
