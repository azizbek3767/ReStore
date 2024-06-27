mkdir ReStore
dotnet new sln
dotnet new webapi -o API --use-controllers
dotnet sln add API
dotnet run

vs code extensions: c#, c# extensions, material icon theme, nuget gallery, sqlite, auto rename tag, eslint

nuget packages: Microsoft.EntityFrameworkCore.Sqlite, Microsoft.EntityFrameworkCore.Design
ef tool: dotnet tool install --global dotnet-ef --version 8.0.6
dotnet ef migrations add InitialCreate -o Data/Migrations
dotnet ef database update

dotnet watch run
dotnet watch --no-hot-reload

npm create vite@latest
change port and add a new command: npm start

client: npm install @mui/material @emotion/react @emotion/styled
npm install @fontsource/roboto
npm install @mui/icons-material
npm install react-router-dom
npm install axios
npm install react-toastify
npm install @mui/lab
npm install redux react-redux
npm install @reduxjs/toolkit

dotnet ef migrations add BasketEntityAdded