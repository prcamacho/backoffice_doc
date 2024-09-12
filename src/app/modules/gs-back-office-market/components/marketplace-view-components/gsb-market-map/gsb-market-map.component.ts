import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';

@Component({
  selector: 'gsb-market-map',
  templateUrl: './gsb-market-map.component.html',
  styleUrls: ['./gsb-market-map.component.scss'],
})
export class GsbMarketMapComponent implements AfterViewInit {
  @Input() address: string = '';
  @Input() isMapTabActive: boolean = false; // <--- Esto se observará en ngOnChanges
  @ViewChild('mapContainer', { static: false }) mapContainer!: ElementRef;

  private map: Map | undefined;
  loadingMap: boolean = true;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    // Se inicia el mapa solo cuando la pestaña está activa
    if (changes['isMapTabActive'] && this.isMapTabActive) {
      setTimeout(() => {
        this.initMap();
      }, 200); // Da un tiempo para que la pestaña se renderice completamente
    }
  }

  ngAfterViewInit(): void {
    // No hacemos nada aquí ya que el mapa se inicia desde ngOnChanges
  }

  private initMap(): void {
    if (!this.mapContainer.nativeElement) return;

    const mapElement = this.mapContainer.nativeElement;
    const defaultCoords = fromLonLat([-0.09, 51.505]); // Coordenadas de ejemplo

    this.map = new Map({
      target: mapElement,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: defaultCoords,
        zoom: 13,
      }),
    });

    this.addMarker(defaultCoords);
    this.geocodeAddress(this.address);

    setTimeout(() => {
      this.map?.updateSize(); // Asegura que el mapa se renderice correctamente
      this.loadingMap = false;
    }, 500);
  }

  private addMarker(coords: any) {
    const marker = new Feature({
      geometry: new Point(coords),
    });

    marker.setStyle(
      new Style({
        image: new Icon({
          src: 'https://openlayers.org/en/latest/examples/data/icon.png',
          scale: 0.1,
        }),
      })
    );

    const vectorSource = new VectorSource({
      features: [marker],
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    this.map?.addLayer(vectorLayer);
  }

  private geocodeAddress(address: string): void {
    if (!address) return;

    fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        address
      )}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          const coords = fromLonLat([data[0].lon, data[0].lat]);
          this.map?.getView().setCenter(coords);
          this.map?.getView().setZoom(18);
          this.addMarker(coords);
        }
      });
  }
}
