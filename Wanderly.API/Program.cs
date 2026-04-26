using Microsoft.EntityFrameworkCore;
using Wanderly.API.Data;
using Wanderly.API.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddControllers();

builder.Services.AddHttpClient();
builder.Services.AddScoped<YelpService>();


// Add DbContext
builder.Services.AddDbContext<WanderlyDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))
);


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Wanderly API V1");
        c.RoutePrefix = string.Empty; // THIS makes Swagger open at /
    });
}


app.UseHttpsRedirection();

app.UseAuthentication();

app.MapControllers();

app.Run();
