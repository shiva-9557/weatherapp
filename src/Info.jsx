import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import "./Info.css";
import Typography from '@mui/material/Typography';

export default function Info({ info }) {
    const imgurl = "https://images.unsplash.com/photo-1545134969-8debd725b007?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    // Map weather conditions to corresponding icons
    const weatherIcons = {
        "Clear": "wb_sunny",
        "Clouds": "cloud",
        "Rain": "umbrella",
        // Add more mappings as needed
    };

    const getWeatherIcon = (condition) => {
        const icon = weatherIcons[condition];
        return icon ? <i className={`wi wi-${icon}`} /> : null;
    };

    return (
        <div className="Info">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={imgurl}
                        title="Cityscape or relevant image representing the weather"
                        alt="Cityscape or relevant image representing the weather"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <div>{getWeatherIcon(info.weather)} {info.weather}</div>
                            <div>Temperature: {info.temp}&deg;C</div>
                            <div>Humidity: {info.humidity}%</div>
                            <div>Min Temperature: {info.tempMin}&deg;C</div>
                            <div>Max Temperature: {info.tempMax}&deg;C</div>
                            <div>Feels Like: {info.feelslike}&deg;C</div>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};
