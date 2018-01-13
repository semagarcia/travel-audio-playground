import { AfterViewInit, Component, ElementRef, Input, Renderer, ViewChild } from '@angular/core';

@Component({
  selector: 'expandable-playlist',
  templateUrl: 'expandable-playlist.html'
})
export class ExpandablePlaylistComponent implements AfterViewInit {

  @ViewChild('expandWrapper', { read: ElementRef }) expandWrapper;
  @Input('expanded') expanded;
  @Input('expandHeight') expandHeight;

  constructor(public renderer: Renderer) {}

  ngAfterViewInit(){
    this.renderer.setElementStyle(
      this.expandWrapper.nativeElement, 'height', this.expandHeight + 'px'
    );
  }

}
