# Ngx-RxJsAuto (for Angular)

To install: `npm install ngx-rxjsauto`

Then, import `rxAuto` and make your services more readable by letting the library building queryParams for you when needed and more :

Example in your service Typescript code:

user.service.ts

```typescript
import { rxAuto } from "ngx-rxjsauto";

private readonly http = inject(HttpClient);

 getUser = () =>
    rxAuto<User>('http://localhost:3000/user', this.http).getHttp();

  getUserById = (id: number) =>
    rxAuto<User>(`http://localhost:3000/user?id=${id}`, this.http).getHttp();

  filterUser = (params: UserFilter) =>
    rxAuto<User>('http://localhost:3000/user', this.http).getHttp(params);

  addUser = (user: User) =>
    rxAuto<User>('http://localhost:3000/user', this.http).postHttp(user);
```

Then, `subscribe` to your `Observable` like you've always done

Component.ts:

```typescript
export class AppComponent implements OnInit {
  userService = inject(UserService);

  ngOnInit(): void {
    //GET A LIST OF USER||
    this.userService.getUser().subscribe((data) => console.log(data));

    //GET WITH QUERY PARAMS||
    let userFilter: UserFilter = { id: 1, name: "Patrick" };
    this.userService.filterUser(userFilter).subscribe((data) => console.log(data));

    //GET WITH ONE QUERY PARAMS
    this.userService.getUserById(1).subscribe((data) => console.log(data));

    //POST
    const user: User = {
      id: 4,
      name: "Pollo",
      role: "admin",
    };
    this.userService.addUser(this.user).subscribe((data) => console.log(data));
  }
}
```

And that's it! See how much more readable your services are now ?.
