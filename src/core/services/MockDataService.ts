import BlogPost from '../Models/BlogPost';
import BasicInfo from '../Models/BasicInfo';
import Social from '../Models/Social';
export default class MockdataService {
  // public blogs: blogpost[];

  public blogs: Array<BlogPost> = new Array();
  public bsinfo: BasicInfo;
  public soci: Social;

  static createnewPost(title: string, subtitle: string): BlogPost {
    return new BlogPost(title, subtitle);
  }

  constructor() {
    this.blogs.push(
      MockdataService.createnewPost(
        'Learn Angular from scratch',
        'Create cool projects learning AngularJS'
      )
    );
    this.blogs.push(
      MockdataService.createnewPost(
        'Java Algorithms and DS',
        'Become a Java PRO'
      )
    );
    this.blogs.push(
      MockdataService.createnewPost(
        'Learn Angular from scratch',
        'Create cool projects learning AngularJS'
      )
    );
    this.blogs.push(
      MockdataService.createnewPost(
        'Java Algorithms and DS',
        'Become a Java PRO'
      )
    );
    this.bsinfo = new BasicInfo(
      'Marcos Costa',
      'I love developing and creating stuff to put in my car.'
    );
    this.soci = new Social(
      'At my company',
      'Dallas, TX',
      new Date('1975-11-05T05:00:00.000Z'),
      'Brazil'
    );
  }

  getpostdatas(): Array<BlogPost> {
    return this.blogs;
  }

  createPost(post: BlogPost): void {
    this.blogs.unshift(post);
  }

  getBasicInfoData(): BasicInfo {
    return this.bsinfo;
  }

  saveBasicinfo(nam: string, intro: string): void {
    this.bsinfo = new BasicInfo(nam, intro);
  }

  getsocial(): Social {
    return this.soci;
  }

  saveSocial(wrk: string, liv: string, bir: Date, frm: string): void {
    this.soci = new Social(wrk, liv, bir, frm);
  }
}

