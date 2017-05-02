import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {SharedModule} from "./shared/shared.module";
import {AppComponent} from "./app.component";
import {routes} from "./app.routes";
import {MapModule} from "./pages/map/map.module";
import {AtmsModule} from "./pages/atms/atms.module";
import {HttpClient} from "./shared/api/http-client.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AtmReportModule} from "./pages/atms/atm-report/atm-report.module";

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(routes, {useHash: true}),
		SharedModule.forRoot(),
		MapModule,
		AtmsModule,
		AtmReportModule
	],
	declarations: [
		AppComponent
	],
	providers: [
		HttpClient
	],
	entryComponents: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
