const videos = [
  {
    id: 1,
    title: 'React First Project',
    duration: 15,
  },
  {
    id: 2,
    title: 'React is cool',
    duration: 25,
  },
  {
    id: 3,
    title: 'React Start',
    duration: 40,
  },
  {
    id: 4,
    title: 'React :)',
    duration: 10,
  }
];

export function VideList() {
  return (
    <>
      <h1>Video List</h1>
      {
        videos.map((video) => {
          return (
            <div key={video.id}>
              <h3>{video.title}</h3>
              <p>{video.duration} minutes</p>
              <button>Like!</button>
            </div>
          )
        })
      }
    </>
  );
}