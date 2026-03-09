using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MoviesNetAPI.Migrations
{
    /// <inheritdoc />
    public partial class ContextUpdate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MovieActors_Actors_ActorId",
                table: "MovieActors");

            migrationBuilder.DropForeignKey(
                name: "FK_MovieActors_Movies_MovieId",
                table: "MovieActors");

            migrationBuilder.DropForeignKey(
                name: "FK_MovieGenres_Genres_GenreId",
                table: "MovieGenres");

            migrationBuilder.DropForeignKey(
                name: "FK_MovieGenres_Movies_MovieId",
                table: "MovieGenres");

            migrationBuilder.DropForeignKey(
                name: "FK_MovieTheaters_Movies_MovieId",
                table: "MovieTheaters");

            migrationBuilder.DropForeignKey(
                name: "FK_MovieTheaters_Theaters_TheaterId",
                table: "MovieTheaters");

            migrationBuilder.DropPrimaryKey(
                name: "PK_MovieTheaters",
                table: "MovieTheaters");

            migrationBuilder.DropPrimaryKey(
                name: "PK_MovieGenres",
                table: "MovieGenres");

            migrationBuilder.DropPrimaryKey(
                name: "PK_MovieActors",
                table: "MovieActors");

            migrationBuilder.RenameTable(
                name: "MovieTheaters",
                newName: "MoviesTheaters");

            migrationBuilder.RenameTable(
                name: "MovieGenres",
                newName: "MoviesGenres");

            migrationBuilder.RenameTable(
                name: "MovieActors",
                newName: "MoviesActors");

            migrationBuilder.RenameIndex(
                name: "IX_MovieTheaters_MovieId",
                table: "MoviesTheaters",
                newName: "IX_MoviesTheaters_MovieId");

            migrationBuilder.RenameIndex(
                name: "IX_MovieGenres_MovieId",
                table: "MoviesGenres",
                newName: "IX_MoviesGenres_MovieId");

            migrationBuilder.RenameIndex(
                name: "IX_MovieActors_MovieId",
                table: "MoviesActors",
                newName: "IX_MoviesActors_MovieId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_MoviesTheaters",
                table: "MoviesTheaters",
                columns: new[] { "TheaterId", "MovieId" });

            migrationBuilder.AddPrimaryKey(
                name: "PK_MoviesGenres",
                table: "MoviesGenres",
                columns: new[] { "GenreId", "MovieId" });

            migrationBuilder.AddPrimaryKey(
                name: "PK_MoviesActors",
                table: "MoviesActors",
                columns: new[] { "ActorId", "MovieId" });

            migrationBuilder.AddForeignKey(
                name: "FK_MoviesActors_Actors_ActorId",
                table: "MoviesActors",
                column: "ActorId",
                principalTable: "Actors",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MoviesActors_Movies_MovieId",
                table: "MoviesActors",
                column: "MovieId",
                principalTable: "Movies",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MoviesGenres_Genres_GenreId",
                table: "MoviesGenres",
                column: "GenreId",
                principalTable: "Genres",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MoviesGenres_Movies_MovieId",
                table: "MoviesGenres",
                column: "MovieId",
                principalTable: "Movies",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MoviesTheaters_Movies_MovieId",
                table: "MoviesTheaters",
                column: "MovieId",
                principalTable: "Movies",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MoviesTheaters_Theaters_TheaterId",
                table: "MoviesTheaters",
                column: "TheaterId",
                principalTable: "Theaters",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MoviesActors_Actors_ActorId",
                table: "MoviesActors");

            migrationBuilder.DropForeignKey(
                name: "FK_MoviesActors_Movies_MovieId",
                table: "MoviesActors");

            migrationBuilder.DropForeignKey(
                name: "FK_MoviesGenres_Genres_GenreId",
                table: "MoviesGenres");

            migrationBuilder.DropForeignKey(
                name: "FK_MoviesGenres_Movies_MovieId",
                table: "MoviesGenres");

            migrationBuilder.DropForeignKey(
                name: "FK_MoviesTheaters_Movies_MovieId",
                table: "MoviesTheaters");

            migrationBuilder.DropForeignKey(
                name: "FK_MoviesTheaters_Theaters_TheaterId",
                table: "MoviesTheaters");

            migrationBuilder.DropPrimaryKey(
                name: "PK_MoviesTheaters",
                table: "MoviesTheaters");

            migrationBuilder.DropPrimaryKey(
                name: "PK_MoviesGenres",
                table: "MoviesGenres");

            migrationBuilder.DropPrimaryKey(
                name: "PK_MoviesActors",
                table: "MoviesActors");

            migrationBuilder.RenameTable(
                name: "MoviesTheaters",
                newName: "MovieTheaters");

            migrationBuilder.RenameTable(
                name: "MoviesGenres",
                newName: "MovieGenres");

            migrationBuilder.RenameTable(
                name: "MoviesActors",
                newName: "MovieActors");

            migrationBuilder.RenameIndex(
                name: "IX_MoviesTheaters_MovieId",
                table: "MovieTheaters",
                newName: "IX_MovieTheaters_MovieId");

            migrationBuilder.RenameIndex(
                name: "IX_MoviesGenres_MovieId",
                table: "MovieGenres",
                newName: "IX_MovieGenres_MovieId");

            migrationBuilder.RenameIndex(
                name: "IX_MoviesActors_MovieId",
                table: "MovieActors",
                newName: "IX_MovieActors_MovieId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_MovieTheaters",
                table: "MovieTheaters",
                columns: new[] { "TheaterId", "MovieId" });

            migrationBuilder.AddPrimaryKey(
                name: "PK_MovieGenres",
                table: "MovieGenres",
                columns: new[] { "GenreId", "MovieId" });

            migrationBuilder.AddPrimaryKey(
                name: "PK_MovieActors",
                table: "MovieActors",
                columns: new[] { "ActorId", "MovieId" });

            migrationBuilder.AddForeignKey(
                name: "FK_MovieActors_Actors_ActorId",
                table: "MovieActors",
                column: "ActorId",
                principalTable: "Actors",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MovieActors_Movies_MovieId",
                table: "MovieActors",
                column: "MovieId",
                principalTable: "Movies",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MovieGenres_Genres_GenreId",
                table: "MovieGenres",
                column: "GenreId",
                principalTable: "Genres",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MovieGenres_Movies_MovieId",
                table: "MovieGenres",
                column: "MovieId",
                principalTable: "Movies",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MovieTheaters_Movies_MovieId",
                table: "MovieTheaters",
                column: "MovieId",
                principalTable: "Movies",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MovieTheaters_Theaters_TheaterId",
                table: "MovieTheaters",
                column: "TheaterId",
                principalTable: "Theaters",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
