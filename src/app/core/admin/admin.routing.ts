import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementAuditComponent } from './management-audit/management-audit.component';
import { ManagementUserComponent } from './management-user/management-user.component';
import { ReportComponent } from './report/report.component';
import { AduanComponent } from './aduan/aduan.component';
import { MaklumBalasComponent } from './maklum-balas/maklum-balas.component';
import { OrganisasiComponent } from './organisasi/organisasi.component';
import { LogHarianComponent } from './log-harian/log-harian.component';

export const AdminRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'aduan',
                component: AduanComponent
            },
            {
                path: 'maklum-balas',
                component: MaklumBalasComponent
            },
            {
                path: 'organisasi',
                component: OrganisasiComponent
            },
            {
                path: 'log-harian',
                component: LogHarianComponent
            },
            {
                path: 'management',
                children: [
                    {
                        path: 'audit-trails',
                        component: ManagementAuditComponent
                    },
                    {
                        path: 'user',
                        component: ManagementUserComponent
                    }
                ]
            },
            {
                path: 'report',
                component: ReportComponent
            }
        ]
    }
]