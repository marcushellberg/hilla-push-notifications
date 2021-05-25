import { customElement, html } from 'lit-element';
import { View } from '../../views/view';

@customElement('empty-view')
export class EmptyView extends View {
  render() {
    return html`<div>Content placeholder</div>`;
  }
}
