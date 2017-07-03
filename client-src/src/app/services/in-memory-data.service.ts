import { InMemoryDbService } from 'angular-in-memory-web-api';
import { UUID } from '../utils/uuid/uuid';
import { ProjectInfo } from '../models/projectInfo'

export class InMemoryDataService implements InMemoryDbService {

  constructor(){ }

  createDb() {
    const projects: ProjectInfo[] = [
      {
        id: UUID.UUID(),
        name: 'Post Spectra',
        date: new Date(2017, 6).getTime(),
        thumbnail: '../../assets/mock_thumbnail.jpg',
        description: 'Formatting/validating NMR/HRMS spectra data',
      },
      {
        id: UUID.UUID(),
        name: 'Project 2',
        date: new Date(2016, 8).getTime(),
        thumbnail: '../../assets/mock_thumbnail.jpg',
        description: 'Formatting/validating NMR/HRMS spectra data',
      },
      {
        id: UUID.UUID(),
        name: 'Project 3',
        date: new Date(2015, 2).getTime(),
        thumbnail: '../../assets/mock_thumbnail.jpg',
        description: 'Formatting/validating NMR/HRMS spectra data',
      },
      {
        id: UUID.UUID(),
        name: 'Project 4',
        date: new Date(2014, 8).getTime(),
        thumbnail: '../../assets/mock_thumbnail.jpg',
        description: 'Formatting/validating NMR/HRMS spectra data' ,
      },
      {
        id: UUID.UUID(),
        name: 'Project 5',
        date: new Date(2015, 2).getTime(),
        thumbnail: '../../assets/mock_thumbnail.jpg',
        description: 'Formatting/validating NMR/HRMS spectra data',
      },
      {
        id: UUID.UUID(),
        name: 'Project 6',
        date: new Date(2014, 8).getTime(),
        thumbnail: '../../assets/mock_thumbnail.jpg',
        description: 'Formatting/validating NMR/HRMS spectra data' ,
      }
    ];
    return { projects };
  }
}
