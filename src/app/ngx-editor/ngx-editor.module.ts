import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PopoverModule } from 'ngx-bootstrap';
import { NgxEditorComponent } from './ngx-editor.component';
import { NgxGrippieComponent } from './ngx-grippie/ngx-grippie.component';
import { NgxEditorMessageComponent } from './ngx-editor-message/ngx-editor-message.component';
import { NgxEditorToolbarComponent } from './ngx-editor-toolbar/ngx-editor-toolbar.component';
import { MessageService } from './common/services/message.service';
import { CommandExecutorService } from './common/services/command-executor.service';
import { ColorSketchModule } from 'ngx-color/sketch'; // <color-sketch></color-sketch>


@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PopoverModule.forRoot(), ColorSketchModule],
  declarations: [NgxEditorComponent, NgxGrippieComponent, NgxEditorMessageComponent, NgxEditorToolbarComponent],
  exports: [NgxEditorComponent],
  providers: [CommandExecutorService, MessageService]
})

export class NgxEditorModule { }
