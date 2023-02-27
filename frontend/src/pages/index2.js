import { createClient } from "next-sanity";
export default function IndexPage({ app }) {
  return (
    <>
      <header>
        <h1>Sanity + Next.js</h1>
      </header>
      <main>
        <h2>app</h2>
        {app.length > 0 && (
          <ul>
            {app.map((app) => (
              <li key={app._id}>{app?.name}</li>
            ))}
          </ul>
        )}
        {!app.length > 0 && <p>No app to show</p>}
        {app.length > 0 && (
          <div>
            <pre>{JSON.stringify(app, null, 2)}</pre>
          </div>
        )}
        {!app.length > 0 && (
          <div>
            <div>¯\_(ツ)_/¯</div>
            <p>
              Your data will show up here when you've configured everything
              correctly
            </p>
          </div>
        )}
      </main>
    </>
  );
}

const client = createClient({
  projectId: "t0tgcmpy",
  dataset: "production",
  apiVersion: "2021-10-14",
  useCdn: false
});

export async function getStaticProps() {
  const app = await client.fetch(`*[_type == "app"]`);

  return {
    props: {
      app
    }
  };
}
