import { ArticleService } from './../article.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  article:  Article = new Article();
  constructor(public activeRoute: ActivatedRoute, public articleService: ArticleService) { }
  title: string;
  public editor;
  public editorContent = `<h3>I am Example content</h3>`;
  public editorOptions = {
    placeholder: 'insert content...'
  };

  ngOnInit() {
    this.editorContent = '<h1>以TDD方式来开发项目的优势无需多言，每写好一个Service接口，' +
   '就可以马上用单元测试进行校验。dao层是最重要，且最复杂的一层组件，若被一股脑mock掉，会隐藏很多细节，使得单元测试价值变小。' +
   '改用内存型数据库的好处是数据库由外部的依赖搬到了内存中，' +
   '它使代码运行在真实的数据库中，这样CRUD操作都可以得到校验。' +
  '<p>优势：单元测试更加可靠，于项目质量很有帮助</p><p>劣势：' +
  '目前内存型数据库只有三种产品：HSQL、H2、Derby，与我们真实使用的Oracle、MySQL、PostgreSQL不同，' +
  '所以测试时需要考虑到他们的方言兼容性（使用标准SQL可以最大化避免兼容性问题）</p><p>基本实践如下：</p>' +
 ' <p>首先在pom.xml中引入H2数据库：</p><p><dependency></p><p><groupId>com.h2database</groupId></p><p> <artifactId>h2</artifactId></p><p>' +
 '<version>1.3.176</version></p><p><scope>test</scope></p><p> </dependency></p><p>然后在spring中配置该数据库：</p><p><jdbc:embedded-database ' +
 'id="embeddedDataSource" type="H2"></p><p><jdbc:script location="classpath:schema.sql" />' +
 '</p><p><jdbc:script location=classpath:test-data.sql" /></p><p>' +
 '</jdbc:embedded-database></p><p>这就配置好了DataSource，同时还在内存中添加了初始化数据库的脚本，在spring的管理下，' +
 '只要注入此DataSource即可， 例如</p><p> @Repository</p><p>public class UserDao {</p>' +
 '<p>@Inject</p><p>@Named("embeddedDataSource")</p><p>DataSource dataSource</p><p>}</p><p>当然，' + 
 '在spring里面，事务、Mybatis的配置也可以基于此DataSource之上。</h1>;</p>';
    this.activeRoute.params.subscribe(
      params => {this.getPost(params['title']); this.title = params['title']; }
    );
  }
  public getPost(id: number) {
    this.articleService
        .getPost(id)
        .subscribe(
          data => this.article = data,
          error => console.error(error)
        );
  }

}
