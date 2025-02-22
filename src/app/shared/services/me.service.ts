import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class MeService {
  private me = undefined;

  public setMe(me: any) {
    this.me = me;
  }

  public getMe(): any {
    return this.me;
  }
}
