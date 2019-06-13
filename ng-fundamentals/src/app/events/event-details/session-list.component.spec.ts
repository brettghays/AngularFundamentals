import { ISession } from './../shared/event.model';
import { SessionListComponent } from './session-list.component';

describe('SessionListComponent', () => {
  let component: SessionListComponent;
  let mockAuthService, mockVoterService;

  beforeEach(() => {
    component = new SessionListComponent(mockAuthService, mockVoterService);
  });

  it('should filter the sessions correctly', () => {
    component.sessions = <ISession[]>[{name: 'session1', level: 'intermediate'},
    {name: 'session2', level: 'intermediate'},
    {name: 'session3', level: 'beginner'}];
    component.filterBy = 'intermediate';

    component.ngOnChanges();

    expect(component.visibleSessions.length).toBe(2);
  });
});
