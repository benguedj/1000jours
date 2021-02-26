export class UserSituation {
  id: number;
  label: string;
  isChecked: boolean;
  
  constructor(userSituation: UserSituation) {
    this.id = userSituation.id;
    this.label = userSituation.label;
    this.isChecked = userSituation.isChecked ?? false;
  }
}

export class UserContext {
  situations: UserSituation[];
  childBirthday: Date | null;

  constructor(userContext: UserContext) {
    this.situations = userContext.situations;
    this.childBirthday = userContext.childBirthday;
  }    
 }