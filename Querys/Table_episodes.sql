CREATE TABLE Episodes (
    episode_id INT PRIMARY KEY IDENTITY,
    series_id INT,
    title NVARCHAR(100) NOT NULL,
    description TEXT,
    release_date DATE,
    episode_number INT,
    poster_url NVARCHAR(255),
    video_url NVARCHAR(255),
    FOREIGN KEY (series_id) REFERENCES Series(series_id)
);