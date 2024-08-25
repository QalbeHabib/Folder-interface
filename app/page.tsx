export default function Home() {
  return (
    <main className="flex min-h-screen w-full  flex-col items-center justify-between p-24">
      <div className="flex justify-between items-center w-full max-w-3xl h-[300px] gap-10">
        <div className="catalog-card-border">catalog-card-border</div>
        <div className="catalog-card-border is-big ">
          catalog-card-border.is-big{" "}
        </div>
      </div>

      <div className="w-full max-w-[1390px] mx-auto"></div>

      <div className="folder">
        <div className="folder-background"></div>
        <div className="folder-content">
          <h3>My Folder</h3>
          <p>
            This is a folder-like structure with a partial background image.
          </p>
        </div>
        <div className="folder-tab"></div>
      </div>

      <div className="folder2 mt-20">
        <div className="folder2-content">
          <h3>My Folder</h3>
          <p>This is a folder-like structure created using CSS.</p>
        </div>
      </div>
    </main>
  );
}
