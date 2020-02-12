import { TestBed } from '@angular/core/testing';

import { LoadingService } from '../../shared/components/loading/loading.service';
import { HttpHelperService } from '../../shared/services/http-helper.service';
import { HttpHelperServiceMock } from '../../tests/http-helper.service.mock';
import { LoadingServiceMock } from '../../tests/loading.service.mock';
import { StudentsDataServiceMock } from '../../tests/students-data.service.mock';
import { StudentsDataService } from './students-data.service';
import { StudentsService } from './students.service';

describe('StudentsService', () => {
  let service: StudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: StudentsDataService, useClass: StudentsDataServiceMock },
        { provide: LoadingService, useClass: LoadingServiceMock },
        { provide: HttpHelperService, useClass: HttpHelperServiceMock }
      ]
    });
    service = TestBed.inject(StudentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
