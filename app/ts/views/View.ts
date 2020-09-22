export abstract class View<T> {
  private _element: JQuery;

  constructor(
    selector: string,
    private _scape: boolean=false
  ) {
    this._element = $(selector);

  }
  
  update(model: T): void {
    let template = this.template(model);
    if(this._scape) {
      template = template.replace(/<script>[\s\S]*?<\/script>/g, '')
    }

    this._element.html(template);
  }

  abstract template(model: T): string;
}