export default function Show({ show }) {
  return (
    <div className="container">
      <style jsx>{`
        .container {
          max-width: 36rem;
          margin:auto;
        }
      `}</style>
      Show Details:
      <div>{show.seo_meta_title}</div>
      <div>{show.seo_meta_description}</div>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const res = await fetch(
      `https://zflix.net/next/flix.json?path=${context.params.show}`
    );
    const [show] = await res.json();
    if (!show) {
      throw new Error("Missing Show");
    }
    return {
      props: {
        show,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
}
