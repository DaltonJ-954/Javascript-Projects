using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OutputCaching;
using Microsoft.EntityFrameworkCore;
using MoviesNetAPI.DTOs;
using MoviesNetAPI.Entities;
using MoviesNetAPI.Utilities;
using System.Formats.Tar;
using System.Linq.Expressions;

namespace MoviesNetAPI.Controllers
{
    [Route("api/genres")]
    [ApiController] // Mark the class as an API controller. This helps with validation for when binding parameters from the request.
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Policy = "isAdmin")]
    public class GenresController : CustomBaseController
    {
        private readonly IOutputCacheStore outputCacheStore;
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;
        private const string cacheTag = "genres";

        public GenresController(IOutputCacheStore outputCacheStore, ApplicationDbContext context,
            IMapper mapper)
            : base(context, mapper, outputCacheStore, cacheTag)
        {
            this.outputCacheStore = outputCacheStore;
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet] // api/genres
        [OutputCache(Tags = [cacheTag], PolicyName = nameof(WithAuthorizeCachePolicy))]
        public async Task<List<GenreDTO>> Get([FromQuery] PaginationDTO pagination) 
        {
            return await Get<Genre, GenreDTO>(pagination, orderBy: g => g.Name);

            //var queryable = context.Genres;
            //await HttpContext.InsertPaginationParametersInHeader(queryable);
            //return await queryable
            //    .OrderBy(g => g.Name)
            //    .Paginate(pagination)
            //    .ProjectTo<GenreDTO>(mapper.ConfigurationProvider)
            //    .ToListAsync();
        }

        [HttpGet("all")]
        [OutputCache(Tags = [cacheTag])]
        [AllowAnonymous]
        public async Task<List<GenreDTO>> Get()
        {
            return await Get<Genre, GenreDTO>(orderBy: g => g.Name);
        }

        [HttpGet("{id:int}", Name = "GetGenreById")] // api/genres/500
        [OutputCache(Tags = [cacheTag])]
        public async Task<ActionResult<GenreDTO>> Get(int id)
        {
            return await Get<Genre, GenreDTO>(id);

            //var genre = await context.Genres
            //    .ProjectTo<GenreDTO>(mapper.ConfigurationProvider)
            //    .FirstOrDefaultAsync(g => g.Id == id);

            //if (genre is null)
            //{
            //    return NotFound();
            //}

            //return genre;
        }

        [HttpPost]
        public async Task<CreatedAtRouteResult> Post([FromBody] GenreCreationDTO genreCreationDTO)
        {
            return await Post<GenreCreationDTO, Genre, GenreDTO>(genreCreationDTO, routeName: "GetGenreById");

            //var genre = mapper.Map<Genre>(genreCreationDTO);
            //context.Add(genre);
            //await context.SaveChangesAsync();
            //await outputCacheStore.EvictByTagAsync(cacheTag, default);
            //var genreDTO = mapper.Map<GenreDTO>(genre);
            //return CreatedAtRoute("GetGenreById", new { id = genreDTO.Id }, genreDTO);
        }

        [HttpPut("{id:int}")]
        public async Task<IActionResult> Put(int id, [FromBody] GenreCreationDTO genreCreationDTO)  
        {
            return await Put<GenreCreationDTO, Genre>(id, genreCreationDTO);

            //var genreExist = await context.Genres.AnyAsync(g => g.Id == id);

            //if (!genreExist)
            //{
            //    return NotFound();
            //}

            //var genre = mapper.Map<Genre>(genreCreationDTO);
            //genre.Id = id;

            //context.Update(genre);
            //await context.SaveChangesAsync();
            //await outputCacheStore.EvictByTagAsync(cacheTag, default);

            //return NoContent();
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            return await Delete<Genre>(id);

            //var deletedRecords = await context.Genres.Where(g => g.Id == id).ExecuteDeleteAsync();

            //if (deletedRecords == 0)
            //{
            //    return NotFound();
            //}

            //await outputCacheStore.EvictByTagAsync(cacheTag, default);
            //return NoContent();
        }
    }
}
