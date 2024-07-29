CREATE TABLE Favorites (
    favorite_id INT PRIMARY KEY IDENTITY,
    user_id INT,
    movie_id INT NULL,
    series_id INT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (movie_id) REFERENCES Movies(movie_id),
    FOREIGN KEY (series_id) REFERENCES Series(series_id)
);