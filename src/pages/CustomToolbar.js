import {
    DataGrid,
    GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
    GridToolbarExport,
    GridToolbarDensitySelector,
} from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

const CustomToolbar = () => {
    return (

        <GridToolbarContainer style={{ display: 'flex', justifyContent: 'space-around' }}>
            <GridToolbarColumnsButton />
            <GridToolbarFilterButton />
            <GridToolbarDensitySelector />
            <GridToolbarExport />
        </GridToolbarContainer>
    );
}

export default CustomToolbar