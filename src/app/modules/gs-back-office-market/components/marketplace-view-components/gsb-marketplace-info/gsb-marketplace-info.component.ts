import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MatTabChangeEvent, MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'gsb-marketplace-info',
  templateUrl: './gsb-marketplace-info.component.html',
  styleUrls: ['./gsb-marketplace-info.component.scss'],
})
export class GsbMarketplaceInfoComponent implements AfterViewInit {
  @ViewChild('tabGroup', { static: false }) tabGroup!: ElementRef<HTMLElement>;

  address: string = '1114, Diego de Rojas, Salta, Salta, Argentina';
  isMapTabActive: boolean = false;
  days: string[] = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo',
  ];
  times: string[] = this.generateTimes();
  schedule: { [key: string]: { open: string; close: string } } = {};
  specialDays: {
    id: number;
    date: Date;
    open: string;
    close: string;
    closed: boolean;
  }[] = [];
  specialDayIdCounter: number = 0;

  logoFile: any = null;
  bannerFile: any = null;

  constructor() {
    this.days.forEach((day) => {
      this.schedule[day] = { open: '', close: '' };
    });
  }

  ngAfterViewInit(): void {
    // No se realizan cambios aquí a menos que necesites hacer algo en la inicialización de la vista
  }

  onTabChange(event: MatTabChangeEvent): void {
    if (event.index === 1) {
      this.isMapTabActive = true;
    } else {
      this.isMapTabActive = false;
    }

    this.centerSelectedTab(event.index); // Pasa el índice para centrar la tab seleccionada
  }

  centerSelectedTab(index: number): void {
    if (this.tabGroup && this.tabGroup.nativeElement) {
      const tabHeader = this.tabGroup.nativeElement.querySelector(
        '.mat-tab-label-container'
      );
      if (tabHeader) {
        const tabLabelElements = tabHeader.querySelectorAll('.mat-tab-label');
        if (tabLabelElements && tabLabelElements[index]) {
          const selectedTab = tabLabelElements[index] as HTMLElement;
          selectedTab.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center',
          });
        }
      }
    }
  }

  generateTimes(): string[] {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      const time = `${hour.toString().padStart(2, '0')}:00 hs`;
      times.push(time);
    }
    return times;
  }

  addSpecialDay(): void {
    this.specialDays.push({
      id: this.specialDayIdCounter++,
      date: new Date(),
      open: '',
      close: '',
      closed: false,
    });
  }

  removeSpecialDay(id: number): void {
    this.specialDays = this.specialDays.filter((day) => day.id !== id);
  }

  onSubmit() {}

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const dropZone = event.currentTarget as HTMLElement;
    dropZone.classList.add('dragover');
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const dropZone = event.currentTarget as HTMLElement;
    dropZone.classList.remove('dragover');
  }

  onDrop(event: DragEvent, type: string) {
    event.preventDefault();
    event.stopPropagation();
    const dropZone = event.currentTarget as HTMLElement;
    dropZone.classList.remove('dragover');

    const files = event.dataTransfer?.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        this.processFile(files[i], type);
      }
    }
  }

  onFileSelected(event: any, type: string) {
    const files: FileList = event.target.files;
    for (let i = 0; i < files.length; i++) {
      this.processFile(files[i], type);
    }
  }

  processFile(file: File, type: string) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const img = new Image();
      img.src = e.target.result;
      img.onload = () => {
        if (
          type === 'logo' &&
          file.size <= 1048576 &&
          img.width === 500 &&
          img.height === 500
        ) {
          this.logoFile = {
            name: file.name,
            type: file.type,
            url: e.target.result,
            width: img.width,
            height: img.height,
          };
        } else if (
          type === 'banner' &&
          file.size <= 10485760 &&
          img.width === 1920 &&
          img.height === 400
        ) {
          this.bannerFile = {
            name: file.name,
            type: file.type,
            url: e.target.result,
            width: img.width,
            height: img.height,
          };
        } else {
          alert('El archivo no cumple con las especificaciones.');
        }
      };
    };
    reader.readAsDataURL(file);
  }

  triggerFileInput(type: string) {
    const inputElement = document.getElementById(
      `${type}Input`
    ) as HTMLInputElement;
    inputElement.click();
  }
}
