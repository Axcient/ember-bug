import Component from '@ember/component';
import { tracked } from '@glimmer/tracking';
import classic from 'ember-classic-decorator';
import { action } from '@ember/object';

@classic
export default class MyCheckboxComponent extends Component {
  @tracked checked = false;

  @action
  checkboxToggled() {
    this.toggleProperty('checked');
  }
}
