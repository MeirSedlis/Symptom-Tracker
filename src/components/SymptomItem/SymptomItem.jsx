import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/Info";   

function SymptomItem({symptom}){

    return(
        <Box key={symptom.id}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          </Typography>
            <List >
                <ListItem
                
                  secondaryAction={
                    <IconButton edge="end" aria-label="info">
                      <InfoIcon />
                    </IconButton>
                  }
                >
                 <Typography>
                     {symptom.symptom}
                 </Typography>
                </ListItem>
            </List>
        </Grid>
      </Box>
    )
}

export default SymptomItem; 