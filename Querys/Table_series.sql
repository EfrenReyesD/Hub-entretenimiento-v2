CREATE TABLE Series (
    series_id INT PRIMARY KEY IDENTITY,
    title NVARCHAR(100) NOT NULL,
    description TEXT,
    release_date DATE,
    poster_url NVARCHAR(255),
    video_url NVARCHAR(255),
    genre_id INT,
    FOREIGN KEY (genre_id) REFERENCES Genres(genre_id)
);