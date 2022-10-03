# SvelteKit & WunderGraph demo

This is a simple app (no authentication, single route) which allows visitors to read and write Posts from a database. It is a tech demo to showcase SvelteKit working with WunderGraph, no bells and whistles!

The web app (SvelteKit) fetches from an API (WunderGraph), which stores data in a database.

The data schema is very simple - just Users and Posts.

#### Database

To keep the demo lean WunderGraph uses a sqlite database, but it is easy to change the db provider via the Prisma config (`database/schema.prisma`) to postgresql, mysql, sqlserver, mongodb, or cockroachdb. Be sure to also update `wundergraph/wundergraph.config.ts` to use the appropriate introspect function.

#### SvelteKit Store

Reactivity within SvelteKit is handled via writable 'stores', which notify components whenever the store value changes (which usually triggers the component to re-render).

This demo contains a custom WunderGraph store (`wundergraph.store.ts`) which simplifies use of the WunderGraph SDK within your Svelte components. It provides the following hooks:

- **useQuery**
- **useSubscription**
- **useMutation**

Example usage:

```ts
// will fetch results once
const { status, refetch, result } = useQuery("ReadPosts");

// svelte reactive declaration
$: posts = result.data.db_findManyPost;

// refetching results
const buttonClickHandler = () => refetch();
```

```ts
// will open a connection to wundergraph and continuosly receive results every 1 second
useSubscription("ReadPosts", (result) => {
	if (result.data) {
		posts = result.data.db_findManyPost;
	}
});
```

```ts
const { mutate } = useMutation("CreatePost");

const submitHandler = () => createPost({ input: newPost });
```

## Todo

- Implement Optimistic UI updates when mutating Posts (don't wait for the next liveQuery to update store, requires use of a global cache-key and cache invalidation)
- Implement UpdatePost (edit a Post), handling scenario where it has been deleted on server while editing
- Add simple Service Worker to demo working offline

#### Attribution

This work was heavily inspired by [koleok](https://github.com/Koleok)'s [realtime-chat](https://github.com/Koleok/sveltekit-wundergraph-postgresql-realtime-chat/blob/main/src/lib/wundergraph.store.ts) repo.
