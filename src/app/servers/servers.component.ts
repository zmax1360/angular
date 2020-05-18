import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreateStatus = 'there is no server';
  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverCreateStatus = 'sever created'
  }

}
