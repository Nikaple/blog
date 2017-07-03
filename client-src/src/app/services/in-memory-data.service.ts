import { Injectable } from "@angular/core";
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { UUID } from '../utils/uuid/uuid';
import { UuidService } from '../utils/uuid/uuid.service';
import { ProjectInfo } from '../models/projectInfo'

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  constructor(private uuidService: UuidService) {}

  createDb() {
    const projects: ProjectInfo[] = [
      {
        id: this.uuidService.generate(),
        name: 'Post Spectra',
        date: new Date(2017, 6).getTime(),
        thumbnail: '../../assets/mock_thumbnail.jpg',
        description: 'Formatting/validating NMR/HRMS spectra data',
      },
      {
        id: this.uuidService.generate(),
        name: 'Project 2',
        date: new Date(2016, 8).getTime(),
        thumbnail: '../../assets/mock_thumbnail.jpg',
        description: 'Formatting/validating NMR/HRMS spectra data',
      },
      {
        id: this.uuidService.generate(),
        name: 'Project 3',
        date: new Date(2015, 2).getTime(),
        thumbnail: '../../assets/mock_thumbnail.jpg',
        description: 'Formatting/validating NMR/HRMS spectra data',
      },
      {
        id: this.uuidService.generate(),
        name: 'Project 4',
        date: new Date(2014, 8).getTime(),
        thumbnail: '../../assets/mock_thumbnail.jpg',
        description: 'Formatting/validating NMR/HRMS spectra data' ,
      },
      {
        id: this.uuidService.generate(),
        name: 'Project 5',
        date: new Date(2015, 2).getTime(),
        thumbnail: '../../assets/mock_thumbnail.jpg',
        description: 'Formatting/validating NMR/HRMS spectra data',
      },
      {
        id: this.uuidService.generate(),
        name: 'Project 6',
        date: new Date(2014, 8).getTime(),
        thumbnail: '../../assets/mock_thumbnail.jpg',
        description: 'Formatting/validating NMR/HRMS spectra data' ,
      }
    ];
    console.log(this.uuidService.generate());
    return { projects };
  }
}
