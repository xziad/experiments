webpackJsonp([0],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradePageModule", function() { return GradePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grade__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var GradePageModule = /** @class */ (function () {
    function GradePageModule() {
    }
    GradePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__grade__["a" /* GradePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__grade__["a" /* GradePage */]),
            ],
        })
    ], GradePageModule);
    return GradePageModule;
}());

//# sourceMappingURL=grade.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GradePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_video_video__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GradePage = /** @class */ (function () {
    function GradePage(navCtrl, navParams, video) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.video = video;
        this.videos = [];
    }
    GradePage.prototype.ionViewDidLoad = function () {
        var grade = this.navParams.get('grade');
        this.getVideos(grade);
    };
    /**
     * @description fetch videos by indicating a set
     * @param {number} set
     */
    GradePage.prototype.getVideos = function (set) {
        var _this = this;
        this.video.get(set)
            .then(function (videos) { _this.videos = videos; console.log(_this.videos); })
            .catch(function (err) { return console.log(err); });
    };
    GradePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-grade',template:/*ion-inline-start:"/home/othman/Desktop/des/design/src/pages/grade/grade.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Grade</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="loading" *ngIf="videos && videos.length === 0">\n    <p>Videos are downloading...</p>\n    <ion-spinner></ion-spinner>\n  </div>\n\n  <div class="videos" *ngIf="videos && videos.length > 0">\n    <video-play *ngFor="let video of videos" [video]="video"></video-play>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/home/othman/Desktop/des/design/src/pages/grade/grade.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_video_video__["a" /* VideoProvider */]])
    ], GradePage);
    return GradePage;
}());

//# sourceMappingURL=grade.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_file_transfer__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__videoLinks__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VideoProvider = /** @class */ (function () {
    function VideoProvider(file, transfer) {
        this.file = file;
        this.transfer = transfer;
    }
    /**
     * @description get videos by indicating a set
     * @param {number} set
     */
    VideoProvider.prototype.get = function (set) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var result = [];
            Promise.all([__WEBPACK_IMPORTED_MODULE_3__videoLinks__["a" /* default */][set].map(function (video) {
                    _this.fetch(video)
                        .then(function (file) { return result.push({ metadata: video, file: file }); })
                        .catch(function (err) { return console.log(err); });
                })]).then(function (res) { return resolve(result); });
        });
    };
    /**
     * @description fetch a single video
     * @param {string} url
     */
    VideoProvider.prototype.fetch = function (video) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.file.checkFile(_this.file.externalDataDirectory, video.name)
                .then(function (exists) {
                // fetch file from storage
                _this.file.resolveDirectoryUrl(_this.file.externalDataDirectory)
                    .then(function (directoryEntry) {
                    _this.file.getFile(directoryEntry, video.name, _this.flags)
                        .then(function (fileEntry) { return resolve(fileEntry); })
                        .catch(function (err) { return console.log(err); });
                });
            })
                .catch(function (err) {
                // download file
                var fileTransfer = _this.transfer.create();
                fileTransfer.download(video.url, _this.file.externalDataDirectory + video.name).then(function (entry) {
                    _this.save(video.name, entry);
                    resolve(entry);
                }).catch(function (err) { return console.log(err); });
            });
        });
    };
    /**
   * @description save a video
   * @param {string} url
   */
    VideoProvider.prototype.save = function (name, file) {
        this.file.writeFile(this.file.dataDirectory, name, file, { replace: true })
            .catch(function (err) { return console.log(err); });
    };
    VideoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_file_transfer__["a" /* FileTransfer */]])
    ], VideoProvider);
    return VideoProvider;
}());

//# sourceMappingURL=video.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileTransfer; });
/* unused harmony export FileTransferObject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(99);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name File Transfer
 *
 * @description
 * This plugin allows you to upload and download files.
 *
 * @deprecated
 * This plugin has been deprecated in favor of XHR2
 * https://cordova.apache.org/blog/2017/10/18/from-filetransfer-to-xhr2.html
 *
 * @usage
 * ```typescript
 * import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
 * import { File } from '@ionic-native/file';
 *
 * constructor(private transfer: FileTransfer, private file: File) { }
 *
 * ...
 *
 * const fileTransfer: FileTransferObject = this.transfer.create();
 *
 * // Upload a file:
 * fileTransfer.upload(..).then(..).catch(..);
 *
 * // Download a file:
 * fileTransfer.download(..).then(..).catch(..);
 *
 * // Abort active transfer:
 * fileTransfer.abort();
 *
 * // full example
 * upload() {
 *   let options: FileUploadOptions = {
 *      fileKey: 'file',
 *      fileName: 'name.jpg',
 *      headers: {}
 *      .....
 *   }
 *
 *   fileTransfer.upload('<file path>', '<api endpoint>', options)
 *    .then((data) => {
 *      // success
 *    }, (err) => {
 *      // error
 *    })
 * }
 *
 * download() {
 *   const url = 'http://www.example.com/file.pdf';
 *   fileTransfer.download(url, this.file.dataDirectory + 'file.pdf').then((entry) => {
 *     console.log('download complete: ' + entry.toURL());
 *   }, (error) => {
 *     // handle error
 *   });
 * }
 *
 * ```
 *
 * To store files in a different/publicly accessible directory, please refer to the following link
 * https://github.com/apache/cordova-plugin-file#where-to-store-files
 *
 * @interfaces
 * FileUploadOptions
 * FileUploadResult
 * FileTransferError
 * @classes
 * FileTransferObject
 */
var FileTransfer = (function (_super) {
    __extends(FileTransfer, _super);
    function FileTransfer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
           * Error code rejected from upload with FileTransferError
           * Defined in FileTransferError.
           *      FILE_NOT_FOUND_ERR: 1   Return when file was not found
           *      INVALID_URL_ERR: 2,     Return when url was invalid
           *      CONNECTION_ERR: 3,      Return on connection error
           *      ABORT_ERR: 4,           Return on aborting
           *      NOT_MODIFIED_ERR: 5     Return on '304 Not Modified' HTTP response
           * @enum {number}
           */
        _this.FileTransferErrorCode = {
            FILE_NOT_FOUND_ERR: 1,
            INVALID_URL_ERR: 2,
            CONNECTION_ERR: 3,
            ABORT_ERR: 4,
            NOT_MODIFIED_ERR: 5
        };
        return _this;
    }
    /**
     * Creates a new FileTransfer object
     * @return {FileTransferObject}
     */
    /**
       * Creates a new FileTransfer object
       * @return {FileTransferObject}
       */
    FileTransfer.prototype.create = /**
       * Creates a new FileTransfer object
       * @return {FileTransferObject}
       */
    function () {
        return new FileTransferObject();
    };
    FileTransfer.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
    ];
    /**
     * @name File Transfer
     *
     * @description
     * This plugin allows you to upload and download files.
     *
     * @deprecated
     * This plugin has been deprecated in favor of XHR2
     * https://cordova.apache.org/blog/2017/10/18/from-filetransfer-to-xhr2.html
     *
     * @usage
     * ```typescript
     * import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
     * import { File } from '@ionic-native/file';
     *
     * constructor(private transfer: FileTransfer, private file: File) { }
     *
     * ...
     *
     * const fileTransfer: FileTransferObject = this.transfer.create();
     *
     * // Upload a file:
     * fileTransfer.upload(..).then(..).catch(..);
     *
     * // Download a file:
     * fileTransfer.download(..).then(..).catch(..);
     *
     * // Abort active transfer:
     * fileTransfer.abort();
     *
     * // full example
     * upload() {
     *   let options: FileUploadOptions = {
     *      fileKey: 'file',
     *      fileName: 'name.jpg',
     *      headers: {}
     *      .....
     *   }
     *
     *   fileTransfer.upload('<file path>', '<api endpoint>', options)
     *    .then((data) => {
     *      // success
     *    }, (err) => {
     *      // error
     *    })
     * }
     *
     * download() {
     *   const url = 'http://www.example.com/file.pdf';
     *   fileTransfer.download(url, this.file.dataDirectory + 'file.pdf').then((entry) => {
     *     console.log('download complete: ' + entry.toURL());
     *   }, (error) => {
     *     // handle error
     *   });
     * }
     *
     * ```
     *
     * To store files in a different/publicly accessible directory, please refer to the following link
     * https://github.com/apache/cordova-plugin-file#where-to-store-files
     *
     * @interfaces
     * FileUploadOptions
     * FileUploadResult
     * FileTransferError
     * @classes
     * FileTransferObject
     */
    FileTransfer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* Plugin */])({
            pluginName: 'FileTransfer',
            plugin: 'cordova-plugin-file-transfer',
            pluginRef: 'FileTransfer',
            repo: 'https://github.com/apache/cordova-plugin-file-transfer',
            platforms: [
                'Amazon Fire OS',
                'Android',
                'Browser',
                'iOS',
                'Ubuntu',
                'Windows',
                'Windows Phone'
            ]
        })
    ], FileTransfer);
    return FileTransfer;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* IonicNativePlugin */]));

/**
 * @hidden
 */
var FileTransferObject = (function () {
    function FileTransferObject() {
        if (Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* checkAvailability */])(FileTransfer.getPluginRef(), null, FileTransfer.getPluginName()) === true) {
            this._objectInstance = new (FileTransfer.getPlugin())();
        }
    }
    /**
     * Sends a file to a server.
     *
     * @param {string} fileUrl  Filesystem URL representing the file on the device or a data URI. For backwards compatibility, this can also be the full path of the file on the device.
     * @param {string} url  URL of the server to receive the file, as encoded by encodeURI().
     * @param {FileUploadOptions} [options]  Optional parameters.
     * @param {boolean} [trustAllHosts]  Optional parameter, defaults to false. If set to true, it accepts all security certificates. This is useful since Android rejects self-signed security certificates. Not recommended for production use. Supported on Android and iOS.
     * @returns {Promise<FileUploadResult>} Returns a Promise that resolves to a FileUploadResult and rejects with FileTransferError.
     */
    /**
       * Sends a file to a server.
       *
       * @param {string} fileUrl  Filesystem URL representing the file on the device or a data URI. For backwards compatibility, this can also be the full path of the file on the device.
       * @param {string} url  URL of the server to receive the file, as encoded by encodeURI().
       * @param {FileUploadOptions} [options]  Optional parameters.
       * @param {boolean} [trustAllHosts]  Optional parameter, defaults to false. If set to true, it accepts all security certificates. This is useful since Android rejects self-signed security certificates. Not recommended for production use. Supported on Android and iOS.
       * @returns {Promise<FileUploadResult>} Returns a Promise that resolves to a FileUploadResult and rejects with FileTransferError.
       */
    FileTransferObject.prototype.upload = /**
       * Sends a file to a server.
       *
       * @param {string} fileUrl  Filesystem URL representing the file on the device or a data URI. For backwards compatibility, this can also be the full path of the file on the device.
       * @param {string} url  URL of the server to receive the file, as encoded by encodeURI().
       * @param {FileUploadOptions} [options]  Optional parameters.
       * @param {boolean} [trustAllHosts]  Optional parameter, defaults to false. If set to true, it accepts all security certificates. This is useful since Android rejects self-signed security certificates. Not recommended for production use. Supported on Android and iOS.
       * @returns {Promise<FileUploadResult>} Returns a Promise that resolves to a FileUploadResult and rejects with FileTransferError.
       */
    function (fileUrl, url, options, trustAllHosts) {
        return;
    };
    /**
     * Downloads a file from server.
     *
     * @param {string} source  URL of the server to download the file, as encoded by encodeURI().
     * @param {string} target  Filesystem url representing the file on the device. For backwards compatibility, this can also be the full path of the file on the device.
     * @param {boolean} [trustAllHosts]  Optional parameter, defaults to false. If set to true, it accepts all security certificates. This is useful because Android rejects self-signed security certificates. Not recommended for production use. Supported on Android and iOS.
     * @param {object} [Optional] parameters, currently only supports headers (such as Authorization (Basic Authentication), etc).
     * @returns {Promise<any>} Returns a Promise that resolves to a FileEntry object.
     */
    /**
       * Downloads a file from server.
       *
       * @param {string} source  URL of the server to download the file, as encoded by encodeURI().
       * @param {string} target  Filesystem url representing the file on the device. For backwards compatibility, this can also be the full path of the file on the device.
       * @param {boolean} [trustAllHosts]  Optional parameter, defaults to false. If set to true, it accepts all security certificates. This is useful because Android rejects self-signed security certificates. Not recommended for production use. Supported on Android and iOS.
       * @param {object} [Optional] parameters, currently only supports headers (such as Authorization (Basic Authentication), etc).
       * @returns {Promise<any>} Returns a Promise that resolves to a FileEntry object.
       */
    FileTransferObject.prototype.download = /**
       * Downloads a file from server.
       *
       * @param {string} source  URL of the server to download the file, as encoded by encodeURI().
       * @param {string} target  Filesystem url representing the file on the device. For backwards compatibility, this can also be the full path of the file on the device.
       * @param {boolean} [trustAllHosts]  Optional parameter, defaults to false. If set to true, it accepts all security certificates. This is useful because Android rejects self-signed security certificates. Not recommended for production use. Supported on Android and iOS.
       * @param {object} [Optional] parameters, currently only supports headers (such as Authorization (Basic Authentication), etc).
       * @returns {Promise<any>} Returns a Promise that resolves to a FileEntry object.
       */
    function (source, target, trustAllHosts, options) {
        return;
    };
    /**
     * Registers a listener that gets called whenever a new chunk of data is transferred.
     * @param {Function} listener Listener that takes a progress event.
     */
    /**
       * Registers a listener that gets called whenever a new chunk of data is transferred.
       * @param {Function} listener Listener that takes a progress event.
       */
    FileTransferObject.prototype.onProgress = /**
       * Registers a listener that gets called whenever a new chunk of data is transferred.
       * @param {Function} listener Listener that takes a progress event.
       */
    function (listener) {
        this._objectInstance.onprogress = listener;
    };
    /**
     * Aborts an in-progress transfer. The onerror callback is passed a FileTransferError
     * object which has an error code of FileTransferError.ABORT_ERR.
     */
    /**
       * Aborts an in-progress transfer. The onerror callback is passed a FileTransferError
       * object which has an error code of FileTransferError.ABORT_ERR.
       */
    FileTransferObject.prototype.abort = /**
       * Aborts an in-progress transfer. The onerror callback is passed a FileTransferError
       * object which has an error code of FileTransferError.ABORT_ERR.
       */
    function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({
            successIndex: 2,
            errorIndex: 3
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object, Boolean]),
        __metadata("design:returntype", Promise)
    ], FileTransferObject.prototype, "upload", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({
            successIndex: 2,
            errorIndex: 3
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Boolean, Object]),
        __metadata("design:returntype", Promise)
    ], FileTransferObject.prototype, "download", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], FileTransferObject.prototype, "onProgress", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({
            sync: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FileTransferObject.prototype, "abort", null);
    /**
     * @hidden
     */
    FileTransferObject = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* Plugin */])({
            plugin: 'cordova-plugin-file-transfer',
            pluginName: 'FileTransfer'
        }),
        __metadata("design:paramtypes", [])
    ], FileTransferObject);
    return FileTransferObject;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return File; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(99);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name File
 * @description
 * This plugin implements a File API allowing read/write access to files residing on the device.
 *
 * The File class implements static convenience functions to access files and directories.
 *
 * Example:
 * ```
 * import { File } from '@ionic-native/file';
 *
 * constructor(private file: File) { }
 *
 * ...
 *
 * this.file.checkDir(this.file.dataDirectory, 'mydir').then(_ => console.log('Directory exists')).catch(err => console.log('Directory doesn\'t exist'));
 *
 * ```
 *
 *  This plugin is based on several specs, including : The HTML5 File API http: //www.w3.org/TR/FileAPI/
 *  The (now-defunct) Directories and System extensions Latest: http: //www.w3.org/TR/2012/WD-file-system-api-20120417/
 *  Although most of the plugin code was written when an earlier spec was current: http: //www.w3.org/TR/2011/WD-file-system-api-20110419/
 *  It also implements the FileWriter spec : http: //dev.w3.org/2009/dap/file-system/file-writer.html
 *  @interfaces
 *  IFile
 *  Entry
 *  DirectoryEntry
 *  DirectoryReader
 *  FileSystem
 */
var File = (function (_super) {
    __extends(File, _super);
    function File() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cordovaFileError = {
            1: 'NOT_FOUND_ERR',
            2: 'SECURITY_ERR',
            3: 'ABORT_ERR',
            4: 'NOT_READABLE_ERR',
            5: 'ENCODING_ERR',
            6: 'NO_MODIFICATION_ALLOWED_ERR',
            7: 'INVALID_STATE_ERR',
            8: 'SYNTAX_ERR',
            9: 'INVALID_MODIFICATION_ERR',
            10: 'QUOTA_EXCEEDED_ERR',
            11: 'TYPE_MISMATCH_ERR',
            12: 'PATH_EXISTS_ERR',
            13: 'WRONG_ENTRY_TYPE',
            14: 'DIR_READ_ERR'
        };
        return _this;
    }
    /**
     * Get free disk space in Bytes
     * @returns {Promise<number>} Returns a promise that resolves with the remaining free disk space in Bytes
     */
    /**
       * Get free disk space in Bytes
       * @returns {Promise<number>} Returns a promise that resolves with the remaining free disk space in Bytes
       */
    File.prototype.getFreeDiskSpace = /**
       * Get free disk space in Bytes
       * @returns {Promise<number>} Returns a promise that resolves with the remaining free disk space in Bytes
       */
    function () {
        return new Promise(function (resolve, reject) {
            cordova.exec(resolve, reject, 'File', 'getFreeDiskSpace', []);
        });
    };
    /**
     * Check if a directory exists in a certain path, directory.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
     * @param {string} dir Name of directory to check
     * @returns {Promise<boolean>} Returns a Promise that resolves to true if the directory exists or rejects with an error.
     */
    /**
       * Check if a directory exists in a certain path, directory.
       *
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} dir Name of directory to check
       * @returns {Promise<boolean>} Returns a Promise that resolves to true if the directory exists or rejects with an error.
       */
    File.prototype.checkDir = /**
       * Check if a directory exists in a certain path, directory.
       *
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} dir Name of directory to check
       * @returns {Promise<boolean>} Returns a Promise that resolves to true if the directory exists or rejects with an error.
       */
    function (path, dir) {
        if (/^\//.test(dir)) {
            var err = new FileError(5);
            err.message = 'directory cannot start with /';
            return Promise.reject(err);
        }
        var fullPath = path + dir;
        return this.resolveDirectoryUrl(fullPath).then(function () {
            return true;
        });
    };
    /**
     * Creates a new directory in the specific path.
     * The replace boolean value determines whether to replace an existing directory with the same name.
     * If an existing directory exists and the replace value is false, the promise will fail and return an error.
     *
     * @param {string} path  Base FileSystem. Please refer to the iOS and Android filesystem above
     * @param {string} dirName Name of directory to create
     * @param {boolean} replace If true, replaces file with same name. If false returns error
     * @returns {Promise<DirectoryEntry>} Returns a Promise that resolves with a DirectoryEntry or rejects with an error.
     */
    /**
       * Creates a new directory in the specific path.
       * The replace boolean value determines whether to replace an existing directory with the same name.
       * If an existing directory exists and the replace value is false, the promise will fail and return an error.
       *
       * @param {string} path  Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} dirName Name of directory to create
       * @param {boolean} replace If true, replaces file with same name. If false returns error
       * @returns {Promise<DirectoryEntry>} Returns a Promise that resolves with a DirectoryEntry or rejects with an error.
       */
    File.prototype.createDir = /**
       * Creates a new directory in the specific path.
       * The replace boolean value determines whether to replace an existing directory with the same name.
       * If an existing directory exists and the replace value is false, the promise will fail and return an error.
       *
       * @param {string} path  Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} dirName Name of directory to create
       * @param {boolean} replace If true, replaces file with same name. If false returns error
       * @returns {Promise<DirectoryEntry>} Returns a Promise that resolves with a DirectoryEntry or rejects with an error.
       */
    function (path, dirName, replace) {
        var _this = this;
        if (/^\//.test(dirName)) {
            var err = new FileError(5);
            err.message = 'directory cannot start with /';
            return Promise.reject(err);
        }
        var options = {
            create: true
        };
        if (!replace) {
            options.exclusive = true;
        }
        return this.resolveDirectoryUrl(path).then(function (fse) {
            return _this.getDirectory(fse, dirName, options);
        });
    };
    /**
     * Remove a directory at a given path.
     *
     * @param {string} path The path to the directory
     * @param {string} dirName The directory name
     * @returns {Promise<RemoveResult>} Returns a Promise that resolves to a RemoveResult or rejects with an error.
     */
    /**
       * Remove a directory at a given path.
       *
       * @param {string} path The path to the directory
       * @param {string} dirName The directory name
       * @returns {Promise<RemoveResult>} Returns a Promise that resolves to a RemoveResult or rejects with an error.
       */
    File.prototype.removeDir = /**
       * Remove a directory at a given path.
       *
       * @param {string} path The path to the directory
       * @param {string} dirName The directory name
       * @returns {Promise<RemoveResult>} Returns a Promise that resolves to a RemoveResult or rejects with an error.
       */
    function (path, dirName) {
        var _this = this;
        if (/^\//.test(dirName)) {
            var err = new FileError(5);
            err.message = 'directory cannot start with /';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getDirectory(fse, dirName, { create: false });
        })
            .then(function (de) {
            return _this.remove(de);
        });
    };
    /**
     * Move a directory to a given path.
     *
     * @param {string} path The source path to the directory
     * @param {string} dirName The source directory name
     * @param {string} newPath The destination path to the directory
     * @param {string} newDirName The destination directory name
     * @returns {Promise<DirectoryEntry|Entry>} Returns a Promise that resolves to the new DirectoryEntry object or rejects with an error.
     */
    /**
       * Move a directory to a given path.
       *
       * @param {string} path The source path to the directory
       * @param {string} dirName The source directory name
       * @param {string} newPath The destination path to the directory
       * @param {string} newDirName The destination directory name
       * @returns {Promise<DirectoryEntry|Entry>} Returns a Promise that resolves to the new DirectoryEntry object or rejects with an error.
       */
    File.prototype.moveDir = /**
       * Move a directory to a given path.
       *
       * @param {string} path The source path to the directory
       * @param {string} dirName The source directory name
       * @param {string} newPath The destination path to the directory
       * @param {string} newDirName The destination directory name
       * @returns {Promise<DirectoryEntry|Entry>} Returns a Promise that resolves to the new DirectoryEntry object or rejects with an error.
       */
    function (path, dirName, newPath, newDirName) {
        var _this = this;
        newDirName = newDirName || dirName;
        if (/^\//.test(newDirName)) {
            var err = new FileError(5);
            err.message = 'directory cannot start with /';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getDirectory(fse, dirName, { create: false });
        })
            .then(function (srcde) {
            return _this.resolveDirectoryUrl(newPath).then(function (destenation) {
                return _this.move(srcde, destenation, newDirName);
            });
        });
    };
    /**
     * Copy a directory in various methods. If destination directory exists, will fail to copy.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} dirName Name of directory to copy
     * @param {string} newPath Base FileSystem of new location
     * @param {string} newDirName New name of directory to copy to (leave blank to remain the same)
     * @returns {Promise<Entry>} Returns a Promise that resolves to the new Entry object or rejects with an error.
     */
    /**
       * Copy a directory in various methods. If destination directory exists, will fail to copy.
       *
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
       * @param {string} dirName Name of directory to copy
       * @param {string} newPath Base FileSystem of new location
       * @param {string} newDirName New name of directory to copy to (leave blank to remain the same)
       * @returns {Promise<Entry>} Returns a Promise that resolves to the new Entry object or rejects with an error.
       */
    File.prototype.copyDir = /**
       * Copy a directory in various methods. If destination directory exists, will fail to copy.
       *
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
       * @param {string} dirName Name of directory to copy
       * @param {string} newPath Base FileSystem of new location
       * @param {string} newDirName New name of directory to copy to (leave blank to remain the same)
       * @returns {Promise<Entry>} Returns a Promise that resolves to the new Entry object or rejects with an error.
       */
    function (path, dirName, newPath, newDirName) {
        var _this = this;
        if (/^\//.test(newDirName)) {
            var err = new FileError(5);
            err.message = 'directory cannot start with /';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getDirectory(fse, dirName, { create: false });
        })
            .then(function (srcde) {
            return _this.resolveDirectoryUrl(newPath).then(function (deste) {
                return _this.copy(srcde, deste, newDirName);
            });
        });
    };
    /**
     * List files and directory from a given path.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} dirName Name of directory
     * @returns {Promise<Entry[]>} Returns a Promise that resolves to an array of Entry objects or rejects with an error.
     */
    /**
       * List files and directory from a given path.
       *
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
       * @param {string} dirName Name of directory
       * @returns {Promise<Entry[]>} Returns a Promise that resolves to an array of Entry objects or rejects with an error.
       */
    File.prototype.listDir = /**
       * List files and directory from a given path.
       *
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
       * @param {string} dirName Name of directory
       * @returns {Promise<Entry[]>} Returns a Promise that resolves to an array of Entry objects or rejects with an error.
       */
    function (path, dirName) {
        var _this = this;
        if (/^\//.test(dirName)) {
            var err = new FileError(5);
            err.message = 'directory cannot start with /';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getDirectory(fse, dirName, {
                create: false,
                exclusive: false
            });
        })
            .then(function (de) {
            var reader = de.createReader();
            return _this.readEntries(reader);
        });
    };
    /**
     * Removes all files and the directory from a desired location.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
     * @param {string} dirName Name of directory
     * @returns {Promise<RemoveResult>} Returns a Promise that resolves with a RemoveResult or rejects with an error.
     */
    /**
       * Removes all files and the directory from a desired location.
       *
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} dirName Name of directory
       * @returns {Promise<RemoveResult>} Returns a Promise that resolves with a RemoveResult or rejects with an error.
       */
    File.prototype.removeRecursively = /**
       * Removes all files and the directory from a desired location.
       *
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} dirName Name of directory
       * @returns {Promise<RemoveResult>} Returns a Promise that resolves with a RemoveResult or rejects with an error.
       */
    function (path, dirName) {
        var _this = this;
        if (/^\//.test(dirName)) {
            var err = new FileError(5);
            err.message = 'directory cannot start with /';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getDirectory(fse, dirName, { create: false });
        })
            .then(function (de) {
            return _this.rimraf(de);
        });
    };
    /**
     * Check if a file exists in a certain path, directory.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
     * @param {string} file Name of file to check
     * @returns {Promise<boolean>} Returns a Promise that resolves with a boolean or rejects with an error.
     */
    /**
       * Check if a file exists in a certain path, directory.
       *
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} file Name of file to check
       * @returns {Promise<boolean>} Returns a Promise that resolves with a boolean or rejects with an error.
       */
    File.prototype.checkFile = /**
       * Check if a file exists in a certain path, directory.
       *
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} file Name of file to check
       * @returns {Promise<boolean>} Returns a Promise that resolves with a boolean or rejects with an error.
       */
    function (path, file) {
        if (/^\//.test(file)) {
            var err = new FileError(5);
            err.message = 'file cannot start with /';
            return Promise.reject(err);
        }
        return this.resolveLocalFilesystemUrl(path + file).then(function (fse) {
            if (fse.isFile) {
                return true;
            }
            else {
                var err = new FileError(13);
                err.message = 'input is not a file';
                return Promise.reject(err);
            }
        });
    };
    /**
     * Creates a new file in the specific path.
     * The replace boolean value determines whether to replace an existing file with the same name.
     * If an existing file exists and the replace value is false, the promise will fail and return an error.
     *
     * @param {string} path  Base FileSystem. Please refer to the iOS and Android filesystem above
     * @param {string} fileName Name of file to create
     * @param {boolean} replace If true, replaces file with same name. If false returns error
     * @returns {Promise<FileEntry>} Returns a Promise that resolves to a FileEntry or rejects with an error.
     */
    /**
       * Creates a new file in the specific path.
       * The replace boolean value determines whether to replace an existing file with the same name.
       * If an existing file exists and the replace value is false, the promise will fail and return an error.
       *
       * @param {string} path  Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} fileName Name of file to create
       * @param {boolean} replace If true, replaces file with same name. If false returns error
       * @returns {Promise<FileEntry>} Returns a Promise that resolves to a FileEntry or rejects with an error.
       */
    File.prototype.createFile = /**
       * Creates a new file in the specific path.
       * The replace boolean value determines whether to replace an existing file with the same name.
       * If an existing file exists and the replace value is false, the promise will fail and return an error.
       *
       * @param {string} path  Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} fileName Name of file to create
       * @param {boolean} replace If true, replaces file with same name. If false returns error
       * @returns {Promise<FileEntry>} Returns a Promise that resolves to a FileEntry or rejects with an error.
       */
    function (path, fileName, replace) {
        var _this = this;
        if (/^\//.test(fileName)) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with /';
            return Promise.reject(err);
        }
        var options = {
            create: true
        };
        if (!replace) {
            options.exclusive = true;
        }
        return this.resolveDirectoryUrl(path).then(function (fse) {
            return _this.getFile(fse, fileName, options);
        });
    };
    /**
     * Removes a file from a desired location.
     *
     * @param {string} path  Base FileSystem. Please refer to the iOS and Android filesystem above
     * @param {string} fileName Name of file to remove
     * @returns {Promise<RemoveResult>} Returns a Promise that resolves to a RemoveResult or rejects with an error.
     */
    /**
       * Removes a file from a desired location.
       *
       * @param {string} path  Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} fileName Name of file to remove
       * @returns {Promise<RemoveResult>} Returns a Promise that resolves to a RemoveResult or rejects with an error.
       */
    File.prototype.removeFile = /**
       * Removes a file from a desired location.
       *
       * @param {string} path  Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} fileName Name of file to remove
       * @returns {Promise<RemoveResult>} Returns a Promise that resolves to a RemoveResult or rejects with an error.
       */
    function (path, fileName) {
        var _this = this;
        if (/^\//.test(fileName)) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with /';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getFile(fse, fileName, { create: false });
        })
            .then(function (fe) {
            return _this.remove(fe);
        });
    };
    /**
     * Write a new file to the desired location.
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
     * @param {string} fileName path relative to base path
     * @param {string | Blob | ArrayBuffer} text content, blob or ArrayBuffer to write
     * @param {IWriteOptions} whether to replace/append to an existing file. See IWriteOptions for more information.
     * @returns {Promise<any>} Returns a Promise that resolves to updated file entry or rejects with an error.
     */
    /**
       * Write a new file to the desired location.
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} fileName path relative to base path
       * @param {string | Blob | ArrayBuffer} text content, blob or ArrayBuffer to write
       * @param {IWriteOptions} whether to replace/append to an existing file. See IWriteOptions for more information.
       * @returns {Promise<any>} Returns a Promise that resolves to updated file entry or rejects with an error.
       */
    File.prototype.writeFile = /**
       * Write a new file to the desired location.
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} fileName path relative to base path
       * @param {string | Blob | ArrayBuffer} text content, blob or ArrayBuffer to write
       * @param {IWriteOptions} whether to replace/append to an existing file. See IWriteOptions for more information.
       * @returns {Promise<any>} Returns a Promise that resolves to updated file entry or rejects with an error.
       */
    function (path, fileName, text, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        if (/^\//.test(fileName)) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with /';
            return Promise.reject(err);
        }
        var getFileOpts = {
            create: !options.append,
            exclusive: !options.replace
        };
        return this.resolveDirectoryUrl(path)
            .then(function (directoryEntry) {
            return _this.getFile(directoryEntry, fileName, getFileOpts);
        })
            .then(function (fileEntry) {
            return _this.writeFileEntry(fileEntry, text, options);
        });
    };
    /**
     * Write content to FileEntry.
     * @hidden
     * @param {FileEntry} fe file entry object
     * @param {string | Blob} text content or blob to write
     * @param {IWriteOptions} options replace file if set to true. See WriteOptions for more information.
     * @returns {Promise<FileEntry>} Returns a Promise that resolves to updated file entry or rejects with an error.
     */
    /**
       * Write content to FileEntry.
       * @hidden
       * @param {FileEntry} fe file entry object
       * @param {string | Blob} text content or blob to write
       * @param {IWriteOptions} options replace file if set to true. See WriteOptions for more information.
       * @returns {Promise<FileEntry>} Returns a Promise that resolves to updated file entry or rejects with an error.
       */
    File.prototype.writeFileEntry = /**
       * Write content to FileEntry.
       * @hidden
       * @param {FileEntry} fe file entry object
       * @param {string | Blob} text content or blob to write
       * @param {IWriteOptions} options replace file if set to true. See WriteOptions for more information.
       * @returns {Promise<FileEntry>} Returns a Promise that resolves to updated file entry or rejects with an error.
       */
    function (fe, text, options) {
        var _this = this;
        return this.createWriter(fe)
            .then(function (writer) {
            if (options.append) {
                writer.seek(writer.length);
            }
            if (options.truncate) {
                writer.truncate(options.truncate);
            }
            return _this.write(writer, text);
        })
            .then(function () { return fe; });
    };
    /**
     * Write to an existing file.
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
     * @param {string} fileName path relative to base path
     * @param {string | Blob} text content or blob to write
     * @returns {Promise<void>} Returns a Promise that resolves or rejects with an error.
     */
    /**
       * Write to an existing file.
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} fileName path relative to base path
       * @param {string | Blob} text content or blob to write
       * @returns {Promise<void>} Returns a Promise that resolves or rejects with an error.
       */
    File.prototype.writeExistingFile = /**
       * Write to an existing file.
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} fileName path relative to base path
       * @param {string | Blob} text content or blob to write
       * @returns {Promise<void>} Returns a Promise that resolves or rejects with an error.
       */
    function (path, fileName, text) {
        return this.writeFile(path, fileName, text, { replace: true });
    };
    /**
     * Read the contents of a file as text.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
     * @param {string} file Name of file, relative to path.
     * @returns {Promise<string>} Returns a Promise that resolves with the contents of the file as string or rejects with an error.
     */
    /**
       * Read the contents of a file as text.
       *
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} file Name of file, relative to path.
       * @returns {Promise<string>} Returns a Promise that resolves with the contents of the file as string or rejects with an error.
       */
    File.prototype.readAsText = /**
       * Read the contents of a file as text.
       *
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} file Name of file, relative to path.
       * @returns {Promise<string>} Returns a Promise that resolves with the contents of the file as string or rejects with an error.
       */
    function (path, file) {
        return this.readFile(path, file, 'Text');
    };
    /**
     * Read file and return data as a base64 encoded data url.
     * A data url is of the form:
     *      data: [<mediatype>][;base64],<data>
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
     * @param {string} file Name of file, relative to path.
     * @returns {Promise<string>} Returns a Promise that resolves with the contents of the file as data URL or rejects with an error.
     */
    /**
       * Read file and return data as a base64 encoded data url.
       * A data url is of the form:
       *      data: [<mediatype>][;base64],<data>
       *
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} file Name of file, relative to path.
       * @returns {Promise<string>} Returns a Promise that resolves with the contents of the file as data URL or rejects with an error.
       */
    File.prototype.readAsDataURL = /**
       * Read file and return data as a base64 encoded data url.
       * A data url is of the form:
       *      data: [<mediatype>][;base64],<data>
       *
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} file Name of file, relative to path.
       * @returns {Promise<string>} Returns a Promise that resolves with the contents of the file as data URL or rejects with an error.
       */
    function (path, file) {
        return this.readFile(path, file, 'DataURL');
    };
    /**
     * Read file and return data as a binary data.
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
     * @param {string} file Name of file, relative to path.
     * @returns {Promise<string>} Returns a Promise that resolves with the contents of the file as string rejects with an error.
     */
    /**
       * Read file and return data as a binary data.
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} file Name of file, relative to path.
       * @returns {Promise<string>} Returns a Promise that resolves with the contents of the file as string rejects with an error.
       */
    File.prototype.readAsBinaryString = /**
       * Read file and return data as a binary data.
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} file Name of file, relative to path.
       * @returns {Promise<string>} Returns a Promise that resolves with the contents of the file as string rejects with an error.
       */
    function (path, file) {
        return this.readFile(path, file, 'BinaryString');
    };
    /**
     * Read file and return data as an ArrayBuffer.
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
     * @param {string} file Name of file, relative to path.
     * @returns {Promise<ArrayBuffer>} Returns a Promise that resolves with the contents of the file as ArrayBuffer or rejects with an error.
     */
    /**
       * Read file and return data as an ArrayBuffer.
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} file Name of file, relative to path.
       * @returns {Promise<ArrayBuffer>} Returns a Promise that resolves with the contents of the file as ArrayBuffer or rejects with an error.
       */
    File.prototype.readAsArrayBuffer = /**
       * Read file and return data as an ArrayBuffer.
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} file Name of file, relative to path.
       * @returns {Promise<ArrayBuffer>} Returns a Promise that resolves with the contents of the file as ArrayBuffer or rejects with an error.
       */
    function (path, file) {
        return this.readFile(path, file, 'ArrayBuffer');
    };
    File.prototype.readFile = function (path, file, readAs) {
        var _this = this;
        if (/^\//.test(file)) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with /';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (directoryEntry) {
            return _this.getFile(directoryEntry, file, { create: false });
        })
            .then(function (fileEntry) {
            var reader = new FileReader();
            return new Promise(function (resolve, reject) {
                reader.onloadend = function () {
                    if (reader.result !== undefined || reader.result !== null) {
                        resolve(reader.result);
                    }
                    else if (reader.error !== undefined || reader.error !== null) {
                        reject(reader.error);
                    }
                    else {
                        reject({ code: null, message: 'READER_ONLOADEND_ERR' });
                    }
                };
                fileEntry.file(function (file) {
                    reader["readAs" + readAs].call(reader, file);
                }, function (error) {
                    reject(error);
                });
            });
        });
    };
    /**
     * Move a file to a given path.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
     * @param {string} fileName Name of file to move
     * @param {string} newPath Base FileSystem of new location
     * @param {string} newFileName New name of file to move to (leave blank to remain the same)
     * @returns {Promise<Entry>} Returns a Promise that resolves to the new Entry or rejects with an error.
     */
    /**
       * Move a file to a given path.
       *
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} fileName Name of file to move
       * @param {string} newPath Base FileSystem of new location
       * @param {string} newFileName New name of file to move to (leave blank to remain the same)
       * @returns {Promise<Entry>} Returns a Promise that resolves to the new Entry or rejects with an error.
       */
    File.prototype.moveFile = /**
       * Move a file to a given path.
       *
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} fileName Name of file to move
       * @param {string} newPath Base FileSystem of new location
       * @param {string} newFileName New name of file to move to (leave blank to remain the same)
       * @returns {Promise<Entry>} Returns a Promise that resolves to the new Entry or rejects with an error.
       */
    function (path, fileName, newPath, newFileName) {
        var _this = this;
        newFileName = newFileName || fileName;
        if (/^\//.test(newFileName)) {
            var err = new FileError(5);
            err.message = 'file name cannot start with /';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getFile(fse, fileName, { create: false });
        })
            .then(function (srcfe) {
            return _this.resolveDirectoryUrl(newPath).then(function (deste) {
                return _this.move(srcfe, deste, newFileName);
            });
        });
    };
    /**
     * Copy a file in various methods. If file exists, will fail to copy.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
     * @param {string} fileName Name of file to copy
     * @param {string} newPath Base FileSystem of new location
     * @param {string} newFileName New name of file to copy to (leave blank to remain the same)
     * @returns {Promise<Entry>} Returns a Promise that resolves to an Entry or rejects with an error.
     */
    /**
       * Copy a file in various methods. If file exists, will fail to copy.
       *
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} fileName Name of file to copy
       * @param {string} newPath Base FileSystem of new location
       * @param {string} newFileName New name of file to copy to (leave blank to remain the same)
       * @returns {Promise<Entry>} Returns a Promise that resolves to an Entry or rejects with an error.
       */
    File.prototype.copyFile = /**
       * Copy a file in various methods. If file exists, will fail to copy.
       *
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} fileName Name of file to copy
       * @param {string} newPath Base FileSystem of new location
       * @param {string} newFileName New name of file to copy to (leave blank to remain the same)
       * @returns {Promise<Entry>} Returns a Promise that resolves to an Entry or rejects with an error.
       */
    function (path, fileName, newPath, newFileName) {
        var _this = this;
        newFileName = newFileName || fileName;
        if (/^\//.test(newFileName)) {
            var err = new FileError(5);
            err.message = 'file name cannot start with /';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getFile(fse, fileName, { create: false });
        })
            .then(function (srcfe) {
            return _this.resolveDirectoryUrl(newPath).then(function (deste) {
                return _this.copy(srcfe, deste, newFileName);
            });
        });
    };
    /**
     * @hidden
     */
    /**
       * @hidden
       */
    File.prototype.fillErrorMessage = /**
       * @hidden
       */
    function (err) {
        try {
            err.message = this.cordovaFileError[err.code];
        }
        catch (e) { }
    };
    /**
     * Resolves a local file system URL
     * @param fileUrl {string} file system url
     * @returns {Promise<Entry>}
     */
    /**
       * Resolves a local file system URL
       * @param fileUrl {string} file system url
       * @returns {Promise<Entry>}
       */
    File.prototype.resolveLocalFilesystemUrl = /**
       * Resolves a local file system URL
       * @param fileUrl {string} file system url
       * @returns {Promise<Entry>}
       */
    function (fileUrl) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                window.resolveLocalFileSystemURL(fileUrl, function (entry) {
                    resolve(entry);
                }, function (err) {
                    _this.fillErrorMessage(err);
                    reject(err);
                });
            }
            catch (xc) {
                _this.fillErrorMessage(xc);
                reject(xc);
            }
        });
    };
    /**
     * Resolves a local directory url
     * @param directoryUrl {string} directory system url
     * @returns {Promise<DirectoryEntry>}
     */
    /**
       * Resolves a local directory url
       * @param directoryUrl {string} directory system url
       * @returns {Promise<DirectoryEntry>}
       */
    File.prototype.resolveDirectoryUrl = /**
       * Resolves a local directory url
       * @param directoryUrl {string} directory system url
       * @returns {Promise<DirectoryEntry>}
       */
    function (directoryUrl) {
        return this.resolveLocalFilesystemUrl(directoryUrl).then(function (de) {
            if (de.isDirectory) {
                return de;
            }
            else {
                var err = new FileError(13);
                err.message = 'input is not a directory';
                return Promise.reject(err);
            }
        });
    };
    /**
     * Get a directory
     * @param directoryEntry {DirectoryEntry} Directory entry, obtained by resolveDirectoryUrl method
     * @param directoryName {string} Directory name
     * @param flags {Flags} Options
     * @returns {Promise<DirectoryEntry>}
     */
    /**
       * Get a directory
       * @param directoryEntry {DirectoryEntry} Directory entry, obtained by resolveDirectoryUrl method
       * @param directoryName {string} Directory name
       * @param flags {Flags} Options
       * @returns {Promise<DirectoryEntry>}
       */
    File.prototype.getDirectory = /**
       * Get a directory
       * @param directoryEntry {DirectoryEntry} Directory entry, obtained by resolveDirectoryUrl method
       * @param directoryName {string} Directory name
       * @param flags {Flags} Options
       * @returns {Promise<DirectoryEntry>}
       */
    function (directoryEntry, directoryName, flags) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                directoryEntry.getDirectory(directoryName, flags, function (de) {
                    resolve(de);
                }, function (err) {
                    _this.fillErrorMessage(err);
                    reject(err);
                });
            }
            catch (xc) {
                _this.fillErrorMessage(xc);
                reject(xc);
            }
        });
    };
    /**
     * Get a file
     * @param directoryEntry {DirectoryEntry} Directory entry, obtained by resolveDirectoryUrl method
     * @param fileName {string} File name
     * @param flags {Flags} Options
     * @returns {Promise<FileEntry>}
     */
    /**
       * Get a file
       * @param directoryEntry {DirectoryEntry} Directory entry, obtained by resolveDirectoryUrl method
       * @param fileName {string} File name
       * @param flags {Flags} Options
       * @returns {Promise<FileEntry>}
       */
    File.prototype.getFile = /**
       * Get a file
       * @param directoryEntry {DirectoryEntry} Directory entry, obtained by resolveDirectoryUrl method
       * @param fileName {string} File name
       * @param flags {Flags} Options
       * @returns {Promise<FileEntry>}
       */
    function (directoryEntry, fileName, flags) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                directoryEntry.getFile(fileName, flags, resolve, function (err) {
                    _this.fillErrorMessage(err);
                    reject(err);
                });
            }
            catch (xc) {
                _this.fillErrorMessage(xc);
                reject(xc);
            }
        });
    };
    /**
     * @hidden
     */
    /**
       * @hidden
       */
    File.prototype.remove = /**
       * @hidden
       */
    function (fe) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fe.remove(function () {
                resolve({ success: true, fileRemoved: fe });
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    /**
       * @hidden
       */
    File.prototype.move = /**
       * @hidden
       */
    function (srce, destdir, newName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            srce.moveTo(destdir, newName, function (deste) {
                resolve(deste);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    /**
       * @hidden
       */
    File.prototype.copy = /**
       * @hidden
       */
    function (srce, destdir, newName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            srce.copyTo(destdir, newName, function (deste) {
                resolve(deste);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    /**
       * @hidden
       */
    File.prototype.readEntries = /**
       * @hidden
       */
    function (dr) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            dr.readEntries(function (entries) {
                resolve(entries);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    /**
       * @hidden
       */
    File.prototype.rimraf = /**
       * @hidden
       */
    function (de) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            de.removeRecursively(function () {
                resolve({ success: true, fileRemoved: de });
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    /**
       * @hidden
       */
    File.prototype.createWriter = /**
       * @hidden
       */
    function (fe) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fe.createWriter(function (writer) {
                resolve(writer);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    /**
       * @hidden
       */
    File.prototype.write = /**
       * @hidden
       */
    function (writer, gu) {
        if (gu instanceof Blob) {
            return this.writeFileInChunks(writer, gu);
        }
        return new Promise(function (resolve, reject) {
            writer.onwriteend = function (evt) {
                if (writer.error) {
                    reject(writer.error);
                }
                else {
                    resolve(evt);
                }
            };
            writer.write(gu);
        });
    };
    /**
     * @hidden
     */
    /**
       * @hidden
       */
    File.prototype.writeFileInChunks = /**
       * @hidden
       */
    function (writer, file) {
        var BLOCK_SIZE = 1024 * 1024;
        var writtenSize = 0;
        function writeNextChunk() {
            var size = Math.min(BLOCK_SIZE, file.size - writtenSize);
            var chunk = file.slice(writtenSize, writtenSize + size);
            writtenSize += size;
            writer.write(chunk);
        }
        return new Promise(function (resolve, reject) {
            writer.onerror = reject;
            writer.onwrite = function () {
                if (writtenSize < file.size) {
                    writeNextChunk();
                }
                else {
                    resolve();
                }
            };
            writeNextChunk();
        });
    };
    File.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
    ];
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "applicationDirectory", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "applicationStorageDirectory", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "dataDirectory", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "cacheDirectory", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "externalApplicationStorageDirectory", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "externalDataDirectory", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "externalCacheDirectory", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "externalRootDirectory", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "tempDirectory", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "syncedDataDirectory", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "documentsDirectory", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "sharedDirectory", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], File.prototype, "getFreeDiskSpace", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "checkDir", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Boolean]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "createDir", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "removeDir", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "moveDir", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "copyDir", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "listDir", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "removeRecursively", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "checkFile", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Boolean]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "createFile", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "removeFile", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object, Object]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "writeFile", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "writeExistingFile", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "readAsText", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "readAsDataURL", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "readAsBinaryString", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "readAsArrayBuffer", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "moveFile", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "copyFile", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "resolveLocalFilesystemUrl", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "resolveDirectoryUrl", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, String, Object]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "getDirectory", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, String, Object]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "getFile", null);
    /**
     * @name File
     * @description
     * This plugin implements a File API allowing read/write access to files residing on the device.
     *
     * The File class implements static convenience functions to access files and directories.
     *
     * Example:
     * ```
     * import { File } from '@ionic-native/file';
     *
     * constructor(private file: File) { }
     *
     * ...
     *
     * this.file.checkDir(this.file.dataDirectory, 'mydir').then(_ => console.log('Directory exists')).catch(err => console.log('Directory doesn\'t exist'));
     *
     * ```
     *
     *  This plugin is based on several specs, including : The HTML5 File API http: //www.w3.org/TR/FileAPI/
     *  The (now-defunct) Directories and System extensions Latest: http: //www.w3.org/TR/2012/WD-file-system-api-20120417/
     *  Although most of the plugin code was written when an earlier spec was current: http: //www.w3.org/TR/2011/WD-file-system-api-20110419/
     *  It also implements the FileWriter spec : http: //dev.w3.org/2009/dap/file-system/file-writer.html
     *  @interfaces
     *  IFile
     *  Entry
     *  DirectoryEntry
     *  DirectoryReader
     *  FileSystem
     */
    File = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* Plugin */])({
            pluginName: 'File',
            plugin: 'cordova-plugin-file',
            pluginRef: 'cordova.file',
            repo: 'https://github.com/apache/cordova-plugin-file',
            platforms: ['Android', 'Browser', 'iOS', 'macOS', 'Windows']
        })
    ], File);
    return File;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([
    [
        {
            'name': 'video1.mp4',
            'videoName': 'الأول الإبتدائي الفصل الدراسي الأول علوم أنواع الحيوانات (الأسماك والحشرات)',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/1%2F%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A3%D9%86%D9%88%D8%A7%D8%B9%20%D8%A7%D9%84%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA%20(%D8%A7%D9%84%D8%A3%D8%B3%D9%85%D8%A7%D9%83%20%D9%88%D8%A7%D9%84%D8%AD%D8%B4%D8%B1%D8%A7%D8%AA).mp4?alt=media&token=b75928a7-6ddf-4663-8a8a-f27e2e04f6c4:'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'الأول الإبتدائي الفصل الدراسي الأول علوم الحيوانات وحاجاتها (آكلات أعشاب ولحوم)',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/1%2F%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA%20%D9%88%D8%AD%D8%A7%D8%AC%D8%A7%D8%AA%D9%87%D8%A7%20(%D8%A2%D9%83%D9%84%D8%A7%D8%AA%20%D8%A3%D8%B9%D8%B4%D8%A7%D8%A8%20%D9%88%D9%84%D8%AD%D9%88%D9%85).mp4?alt=media&token=e3954493-dd9b-4840-9fc0-14511bd3e531'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'الأول الإبتدائي الفصل الدراسي الأول علوم l النباتات والمخلوقات الحية',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/1%2F%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20l%20%D8%A7%D9%84%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA%20%D9%88%D8%A7%D9%84%D9%85%D8%AE%D9%84%D9%88%D9%82%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A9.mp4?alt=media&token=c1b113fc-10f4-4ebb-bcda-6113b32fc8b5'
        },
        {
            'name': 'video4.mp4',
            'videoName': 'الأول الابتدائي الفصل الدراسي الأول العلوم الحيوانات وحاجاتها (أكلات الأعشاب وأكلات اللحوم)',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/1%2F%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA%20%D9%88%D8%AD%D8%A7%D8%AC%D8%A7%D8%AA%D9%87%D8%A7%20(%D8%A3%D9%83%D9%84%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A3%D8%B9%D8%B4%D8%A7%D8%A8%20%D9%88%D8%A3%D9%83%D9%84%D8%A7%D8%AA%20%D8%A7%D9%84%D9%84%D8%AD%D9%88%D9%85).mp4?alt=media&token=474a46d9-a403-4086-8a80-61562f06eca7'
        },
        {
            'name': 'video5.mp4',
            'videoName': 'الأول الابتدائي الفصل الدراسي الأول علوم أنواع الحيوانات (الثديات والطيور)',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/1%2F%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A3%D9%86%D9%88%D8%A7%D8%B9%20%D8%A7%D9%84%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA%20(%D8%A7%D9%84%D8%AB%D8%AF%D9%8A%D8%A7%D8%AA%20%D9%88%D8%A7%D9%84%D8%B7%D9%8A%D9%88%D8%B1).mp4?alt=media&token=7879e435-eebc-4bd6-b181-abc0c37b897a'
        },
        {
            'name': 'video6.mp4',
            'videoName': 'الأول الابتدائي الفصل الدراسي الأول علوم النباتات تعيش في اماكن كثيرة.mp4',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/1%2F%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA%20%D8%AA%D8%B9%D9%8A%D8%B4%20%D9%81%D9%8A%20%D8%A7%D9%85%D8%A7%D9%83%D9%86%20%D9%83%D8%AB%D9%8A%D8%B1%D8%A9.mp4?alt=media&token=deaf6807-7175-4ca1-a8db-82566d3a6d3f'
        },
        {
            'name': 'video7.mp4',
            'videoName': 'الأول الابتدائي الفصل الدراسي الأول علوم النباتات تنمو وتتغير - الدرس الاول',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/1%2F%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA%20%D8%AA%D9%86%D9%85%D9%88%20%D9%88%D8%AA%D8%AA%D8%BA%D9%8A%D8%B1%20-%20%D8%A7%D9%84%D8%AF%D8%B1%D8%B3%20%D8%A7%D9%84%D8%A7%D9%88%D9%84.mp4?alt=media&token=96d24f79-516e-4b67-90e0-785e2842ad5a'
        },
        {
            'name': 'video8.mp4',
            'videoName': 'الأول الابتدائي الفصل الدراسي الأول علوم النباتات والمخلوقات الحية (2)',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/1%2F%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA%20%D9%88%D8%A7%D9%84%D9%85%D8%AE%D9%84%D9%88%D9%82%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A9%20(2).mp4?alt=media&token=44038f8a-ec4a-47af-b202-af766d71582f'
        },
        {
            'name': 'video9.mp4',
            'videoName': 'الأول الابتدائي الفصل الدراسي الأول علوم النباتات والمخلوقات الحية (3)',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/1%2F%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA%20%D9%88%D8%A7%D9%84%D9%85%D8%AE%D9%84%D9%88%D9%82%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A9%20(3).mp4?alt=media&token=986ae103-b1b6-4f83-9def-625ae80c6027'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'الأول الابتدائي الفصل الدراسي الأول علوم النباتات والمخلوقات الحية (4)',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/1%2F%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA%20%D9%88%D8%A7%D9%84%D9%85%D8%AE%D9%84%D9%88%D9%82%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A9%20(4).mp4?alt=media&token=77c8dba3-8733-4ad8-b2e5-36e72d0312aa'
        },
        {
            'name': 'video11.mp4',
            'videoName': 'الأول الابتدائي الفصل الدراسي الأول علوم النباتات والمخلوقات الحية',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/1%2F%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA%20%D9%88%D8%A7%D9%84%D9%85%D8%AE%D9%84%D9%88%D9%82%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A9.mp4?alt=media&token=c6bb1f7c-5b9e-41ce-aa01-cfae4dcc6e67'
        },
        {
            'name': 'video12.mp4',
            'videoName': 'الأول الابتدائي الفصل الدراسي الأول علوم كيف تنمو النباتات من الجذور',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/1%2F%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%83%D9%8A%D9%81%20%D8%AA%D9%86%D9%85%D9%88%20%D8%A7%D9%84%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA%20%D9%85%D9%86%20%D8%A7%D9%84%D8%AC%D8%B0%D9%88%D8%B1.mp4?alt=media&token=0bbcc4de-a5fb-435e-a875-5f50f94ec0de'
        },
        {
            'name': 'video13.mp4',
            'videoName': 'الأول الابتدائي الفصل الدراسي الاول علوم أنواع الحيوانات (الزواحف والبرمائيات)',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/1%2F%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A7%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%D8%A3%D9%86%D9%88%D8%A7%D8%B9%20%D8%A7%D9%84%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA%20(%D8%A7%D9%84%D8%B2%D9%88%D8%A7%D8%AD%D9%81%20%D9%88%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%A7%D8%A6%D9%8A%D8%A7%D8%AA).mp4?alt=media&token=16c19df6-e8c9-4daa-acbb-0f1a775df47e'
        },
        {
            'name': 'video14.mp4',
            'videoName': 'الاول الابتدائي الفصل الدراسي الأول علوم الفصل الخامس - موارد الارض- مفهوم التلوث',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/1%2F%D8%A7%D9%84%D8%A7%D9%88%D9%84%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20-%20%D9%85%D9%88%D8%A7%D8%B1%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B1%D8%B6-%20%D9%85%D9%81%D9%87%D9%88%D9%85%20%D8%A7%D9%84%D8%AA%D9%84%D9%88%D8%AB.mp4?alt=media&token=7ac2c3b4-9de2-426b-a89f-018764669cd7'
        },
        {
            'name': 'video15.mp4',
            'videoName': 'الاول الابتدائي الفصل الدراسي الأول علوم ما أهمية الماء والهواء',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/1%2F%D8%A7%D9%84%D8%A7%D9%88%D9%84%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%A7%20%D8%A3%D9%87%D9%85%D9%8A%D8%A9%20%D8%A7%D9%84%D9%85%D8%A7%D8%A1%20%D9%88%D8%A7%D9%84%D9%87%D9%88%D8%A7%D8%A1.mp4?alt=media&token=6d3390ff-4d4f-4502-b792-e2684c8b36c8'
        },
        {
            'name': 'video16.mp4',
            'videoName': 'الاول الابتدائي الفصل الدراسي الأول علوم مراجعة الفصل الثالث - الحيوانات من حولنا',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/1%2F%D8%A7%D9%84%D8%A7%D9%88%D9%84%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%B1%D8%A7%D8%AC%D8%B9%D8%A9%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20-%20%D8%A7%D9%84%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA%20%D9%85%D9%86%20%D8%AD%D9%88%D9%84%D9%86%D8%A7.mp4?alt=media&token=79af1e41-74f4-40af-bb2e-5e6ead5b2ecc'
        },
        {
            'name': 'video17.mp4',
            'videoName': 'الاول الابتدائي الفصل الدراسي الأول العلوم أنواع الحيوانات (الاسماك والحشرات)',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/1%2F%D8%A7%D9%84%D8%A7%D9%88%D9%84%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A3%D9%86%D9%88%D8%A7%D8%B9%20%D8%A7%D9%84%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA%20(%D8%A7%D9%84%D8%A7%D8%B3%D9%85%D8%A7%D9%83%20%D9%88%D8%A7%D9%84%D8%AD%D8%B4%D8%B1%D8%A7%D8%AA).mp4?alt=media&token=83314780-e32a-44fc-9cc1-aa3b7bb2452c'
        },
        {
            'name': 'video18.mp4',
            'videoName': 'لأول الابتدائي الفصل الدراسي الأول علوم النباتات والمخلوقات الحية',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/1%2F%D9%84%D8%A3%D9%88%D9%84%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA%20%D9%88%D8%A7%D9%84%D9%85%D8%AE%D9%84%D9%88%D9%82%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A9.mp4?alt=media&token=4f9ccf57-fc25-43b0-8ee1-0c76ebf175e1'
        },
    ],
    [
        {
            'name': 'video19.mp4',
            'videoName': 'االأول الابتدائي الفصل الدراسي الثاني 1438 علوم العلوم والرياضيات',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/1-2%2F%D8%A7%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%D9%88%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA.mp4?alt=media&token=24a95373-4909-4e2c-a7fc-c145c4f8d66e'
        },
        {
            'name': 'video20.mp4',
            'videoName': 'االأول الابتدائي الفصل الدراسي الثاني 1438 علوم فصل الخريف وفصل الشتاء',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/1-2%2F%D8%A7%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AE%D8%B1%D9%8A%D9%81%20%D9%88%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%B4%D8%AA%D8%A7%D8%A1.mp4?alt=media&token=ca29a061-0a41-416a-9a41-1c50d6c812e6'
        },
        {
            'name': 'video21.mp4',
            'videoName': 'االأول الابتدائي الفصل الدراسي الثاني 1438 علوم فصل الربيع وفصل الصيف',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/1-2%2F%D8%A7%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%B1%D8%A8%D9%8A%D8%B9%20%D9%88%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%B5%D9%8A%D9%81.mp4?alt=media&token=2c2202ce-af0a-48e2-bb9c-b5bc2f8b3597'
        },
        {
            'name': 'video22.mp4',
            'videoName': 'الأول الإبتدائي الفصل الدراسي الثاني 1438 علوم الفصول الأربعة',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/1-2%2F%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%88%D9%84%20%D8%A7%D9%84%D8%A3%D8%B1%D8%A8%D8%B9%D8%A9.mp4?alt=media&token=f0d50575-c4f7-4e95-afcd-3d4a6672bf51'
        },
        {
            'name': 'video23.mp4',
            'videoName': 'الأول الإبتدائي الفصل الدراسي الثاني 1438 علوم جمل كيف اقيس الطقس -1',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/1-2%2F%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%AC%D9%85%D9%84%20%D9%83%D9%8A%D9%81%20%D8%A7%D9%82%D9%8A%D8%B3%20%D8%A7%D9%84%D8%B7%D9%82%D8%B3%20-1.mp4?alt=media&token=e0ffc1b2-f5d4-4258-a9b9-6854b4a0f680'
        },
        {
            'name': 'video24.mp4',
            'videoName': 'الأول الابتدائي الفصل الدراسي الثاني 1438 العلوم الفصل السابع-المادة من حولنا',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/1-2%2F%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%B3%D8%A7%D8%A8%D8%B9-%D8%A7%D9%84%D9%85%D8%A7%D8%AF%D8%A9%20%D9%85%D9%86%20%D8%AD%D9%88%D9%84%D9%86%D8%A7.mp4?alt=media&token=86972a31-fc88-475b-a18f-6f1efed980fa'
        },
        {
            'name': 'video25.mp4',
            'videoName': 'الأول الابتدائي الفصل الدراسي الثاني 1438 العلوم خصائص المواد',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/1-2%2F%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%20%D8%AE%D8%B5%D8%A7%D8%A6%D8%B5%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%AF.mp4?alt=media&token=940e84cc-fed0-4360-8828-60080f684eae'
        },
        {
            'name': 'video26.mp4',
            'videoName': 'الأول الابتدائي الفصل الدراسي الثاني 1438 علوم مراجعة الفصل السادس',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/1-2%2F%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%D9%85%D8%B1%D8%A7%D8%AC%D8%B9%D8%A9%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3.mp4?alt=media&token=db29d582-78b8-40e1-970b-fc6c13c9a2f5'
        },
        {
            'name': 'video27.mp4',
            'videoName': 'الاول االابتدائي الفصل الدراسي الثاني 1438 العلوم مراجعة الفصل السابع',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/1-2%2F%D8%A7%D9%84%D8%A7%D9%88%D9%84%20%D8%A7%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%D9%85%D8%B1%D8%A7%D8%AC%D8%B9%D8%A9%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%B3%D8%A7%D8%A8%D8%B9.mp4?alt=media&token=ff391f3c-fc01-4d00-94e4-c9bda2ee7e44'
        },
        {
            'name': 'video28.mp4',
            'videoName': 'الاول ابتدائي الفصل الدراسي الثاني 1438 علوم قراءة علمية وحدات البناء',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/1-2%2F%D8%A7%D9%84%D8%A7%D9%88%D9%84%20%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%82%D8%B1%D8%A7%D8%A1%D8%A9%20%D8%B9%D9%84%D9%85%D9%8A%D8%A9%20%20%D9%88%D8%AD%D8%AF%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A8%D9%86%D8%A7%D8%A1.mp4?alt=media&token=b98a18d3-120d-4d94-90d6-97246b704ee2'
        },
        {
            'name': 'video29.mp4',
            'videoName': 'الاول الابتدائي الفصل الدراسي الثاني علوم المواد الصلبة ما المادة الصلبة',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/1-2%2F%D8%A7%D9%84%D8%A7%D9%88%D9%84%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%AF%20%D8%A7%D9%84%D8%B5%D9%84%D8%A8%D8%A9%20%20%D9%85%D8%A7%20%D8%A7%D9%84%D9%85%D8%A7%D8%AF%D8%A9%20%D8%A7%D9%84%D8%B5%D9%84%D8%A8%D8%A9.mp4?alt=media&token=569d5bc1-acc5-41e5-bc14-4c7123951337'
        },
        {
            'name': 'video30.mp4',
            'videoName': 'الاول الابتدائي الفصل الدراسي الثاني علوم خصائص المواد ما المادة',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/1-2%2F%D8%A7%D9%84%D8%A7%D9%88%D9%84%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%AE%D8%B5%D8%A7%D8%A6%D8%B5%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%AF%20%20%D9%85%D8%A7%20%D8%A7%D9%84%D9%85%D8%A7%D8%AF%D8%A9.mp4?alt=media&token=f84c65e5-d4df-412e-a729-a54242e26206'
        },
        {
            'name': 'video31.mp4',
            'videoName': 'الاول الابتدائي الفصل الدراسي الثاني علوم المواد الصلبة - خصائص الاشياء الصلبة',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/1-2%2F%D8%A7%D9%84%D8%A7%D9%88%D9%84%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%AF%20%D8%A7%D9%84%D8%B5%D9%84%D8%A8%D8%A9%20-%20%D8%AE%D8%B5%D8%A7%D8%A6%D8%B5%20%D8%A7%D9%84%D8%A7%D8%B4%D9%8A%D8%A7%D8%A1%20%D8%A7%D9%84%D8%B5%D9%84%D8%A8%D8%A9.mp4?alt=media&token=d0699a2c-de28-487c-aa98-1789629ea884'
        },
        {
            'name': 'video32.mp4',
            'videoName': 'الاول الابتدائي الفصل الدراسي الثاني 1438 علوم الطاقة',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/1-2%2F%D8%A7%D9%84%D8%A7%D9%88%D9%84%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%20%D8%A7%D9%84%D8%B7%D8%A7%D9%82%D8%A9.mp4?alt=media&token=11ec7d55-8564-4d4a-b926-254a1a7da55b'
        },
        {
            'name': 'video33.mp4',
            'videoName': 'الاول الابتدائي الفصل الدراسي الثاني 1438 علوم الفصل الثامن تغيرات المادة',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/1-2%2F%D8%A7%D9%84%D8%A7%D9%88%D9%84%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AB%D8%A7%D9%85%D9%86%20%20%20%D8%AA%D8%BA%D9%8A%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D9%85%D8%A7%D8%AF%D8%A9.mp4?alt=media&token=80ecdb8f-b0f6-4c44-85f2-88c447cd694d'
        },
        {
            'name': 'video34.mp4',
            'videoName': 'الاول الابتدائي الفصل الدراسي الثاني 1438 علوم الفصول الاربعة',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/1-2%2F%D8%A7%D9%84%D8%A7%D9%88%D9%84%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%88%D9%84%20%D8%A7%D9%84%D8%A7%D8%B1%D8%A8%D8%B9%D8%A9.mp4?alt=media&token=e84662b7-ad9d-430a-80fc-4b84d99eab07'
        },
        {
            'name': 'video35.mp4',
            'videoName': 'الاول الابتدائي الفصل الدراسي الثاني 1438 علوم المخاليط',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/1-2%2F%D8%A7%D9%84%D8%A7%D9%88%D9%84%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%85%D8%AE%D8%A7%D9%84%D9%8A%D8%B7.mp4?alt=media&token=fad4bce3-05e4-48a3-a490-1c44b6a51556'
        },
        {
            'name': 'video36.mp4',
            'videoName': 'الاول الابتدائي الفصل الدراسي الثاني 1438 علوم كيف تتغير المادة؟',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/1-2%2F%D8%A7%D9%84%D8%A7%D9%88%D9%84%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%83%D9%8A%D9%81%20%D8%AA%D8%AA%D8%BA%D9%8A%D8%B1%20%D8%A7%D9%84%D9%85%D8%A7%D8%AF%D8%A9%D8%9F.mp4?alt=media&token=d89c359b-6f13-44c5-85b1-8c6fbf9ce132'
        },
        {
            'name': 'video37.mp4',
            'videoName': 'الاول الابتدائي الفصل الدراسي الثاني 1438 علوم ماالحرارة؟',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/1-2%2F%D8%A7%D9%84%D8%A7%D9%88%D9%84%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%A7%D8%A7%D9%84%D8%AD%D8%B1%D8%A7%D8%B1%D8%A9%D8%9F.mp4?alt=media&token=8a57dd6a-0532-4c1b-8319-b32c90777d8e'
        },
        {
            'name': 'video38.mp4',
            'videoName': 'الاول الابتدائي الفصل الدراسي الثاني 1438 علوم ماالطاقة؟',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/1-2%2F%D8%A7%D9%84%D8%A7%D9%88%D9%84%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%A7%D8%A7%D9%84%D8%B7%D8%A7%D9%82%D8%A9%D8%9F.mp4?alt=media&token=e7bf7f57-4fc8-4d65-8373-d804b7b86093'
        },
        {
            'name': 'video39.mp4',
            'videoName': 'الاول الابتدائي الفصل الدراسي الثاني 1438 علوم ماالمخلوط؟',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/1-2%2F%D8%A7%D9%84%D8%A7%D9%88%D9%84%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%A7%D8%A7%D9%84%D9%85%D8%AE%D9%84%D9%88%D8%B7%D8%9F.mp4?alt=media&token=cd1faf88-0ca9-4351-a29f-b9e4207291bc'
        },
        {
            'name': 'video40.mp4',
            'videoName': 'الاول الابتدائي الفصل الدراسي الثاني 1438 علوم مراجعة الفصل التاسع',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/1-2%2F%D8%A7%D9%84%D8%A7%D9%88%D9%84%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%B1%D8%A7%D8%AC%D8%B9%D8%A9%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AA%D8%A7%D8%B3%D8%B9.mp4?alt=media&token=87b8c67b-bab8-4aa4-9de5-ccea87ada586'
        },
        {
            'name': 'video41.mp4',
            'videoName': 'الاول الابتدائي الفصل الدراسي الثاني 1438 علوم مراجعة الفصل ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/1-2%2F%D8%A7%D9%84%D8%A7%D9%88%D9%84%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%B1%D8%A7%D8%AC%D8%B9%D8%A9%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%B3%D8%A7%D8%A8%D8%B9.mp4?alt=media&token=4183fb7f-4454-4cb8-ba92-e887b728206c'
        },
        {
            'name': 'video42.mp4',
            'videoName': 'الاول الابتدائي الفصل الدراسي الثاني 1438 علوم الضوء والصوت',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/1-2%2F%D8%A7%D9%84%D8%A7%D9%88%D9%84%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D8%B6%D9%88%D8%A1%20%D9%88%D8%A7%D9%84%D8%B5%D9%88%D8%AA.mp4?alt=media&token=fa35cfbd-ccc4-4c68-9f1f-53787759f1ab'
        },
        {
            'name': 'video43.mp4',
            'videoName': 'الاول الابتدائي الفصل الدراسي الثاني 1438 علوم ماالضوء؟.',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/1-2%2F%D8%A7%D9%84%D8%A7%D9%88%D9%84%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%D9%85%D8%A7%D8%A7%D9%84%D8%B6%D9%88%D8%A1%D8%9F.mp4?alt=media&token=8e86006c-ca74-494f-b739-e626cb7ead39'
        },
        {
            'name': 'video44.mp4',
            'videoName': 'الاول البتدائي الفصل الدراسي الثاني 1438 علوم قراءة علمية وحدات البناء',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/1-2%2F%D8%A7%D9%84%D8%A7%D9%88%D9%84%20%D8%A7%D9%84%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%D9%82%D8%B1%D8%A7%D8%A1%D8%A9%20%D8%B9%D9%84%D9%85%D9%8A%D8%A9%20%D9%88%D8%AD%D8%AF%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A8%D9%86%D8%A7%D8%A1.mp4?alt=media&token=4aaf0fa6-68b4-4d39-8da3-b135898529d6'
        },
    ],
    [
        {
            'name': 'three45.mp4',
            'videoName': 'الثاني الإبتدائي الفصل الدراسي الأول علوم النباتات تنتج نباتات جديدة',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA%20%D8%AA%D9%86%D8%AA%D8%AC%20%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA%20%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9.mp4?alt=media&token=b3b1215a-f6ce-4cf7-bf86-779fd301a0e0'
        },
        {
            'name': 'three.mp4',
            'videoName': 'الثاني الإبتدائي l الفصل الدراسي الأول l حاجات المخلوقات الحية',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20l%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20l%20%D8%AD%D8%A7%D8%AC%D8%A7%D8%AA%20%D8%A7%D9%84%D9%85%D8%AE%D9%84%D9%88%D9%82%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A9.mp4?alt=media&token=70b84881-b0c2-4c56-8f5e-3eb898131460'
        },
        {
            'name': 'three.mp4',
            'videoName': 'الثاني الإبتدائي l الفصل الدراسي الأول l علوم l المهارات والطريقة العلمية',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20l%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20l%20%D8%B9%D9%84%D9%88%D9%85%20l%20%D8%A7%D9%84%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA%20%D9%88%D8%A7%D9%84%D8%B7%D8%B1%D9%8A%D9%82%D8%A9%20%D8%A7%D9%84%D8%B9%D9%84%D9%85%D9%8A%D8%A9.mp4?alt=media&token=605210c2-9236-4777-a7ba-04c531aea788'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'الثاني الإبتدائي l الفصل الدراسي الأول l علوم l مراجعة الفصل الثاني',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20l%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20l%20%D8%B9%D9%84%D9%88%D9%85%20l%20%D9%85%D8%B1%D8%A7%D8%AC%D8%B9%D8%A9%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A.mp4?alt=media&token=8115f8eb-8c1e-4a76-8e8d-79084db9f4e6'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'الثاني الابتدائي الفصل الدراسي الأول علوم التربة',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D8%A9.mp4?alt=media&token=eb65b114-227e-4a4e-b3a9-67e828427e2c'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'الثاني الابتدائي الفصل الدراسي الأول علوم الحيوانات - الحيوانات تنمو وتتغير',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA%20-%20%D8%A7%D9%84%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA%20%D8%AA%D9%86%D9%85%D9%88%20%D9%88%D8%AA%D8%AA%D8%BA%D9%8A%D8%B1.mp4?alt=media&token=caaf2be0-d6c5-4e5d-9352-aee470907195'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'الثاني الابتدائي الفصل الدراسي الأول علوم الصخور والمعادن',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B5%D8%AE%D9%88%D8%B1%20%D9%88%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D8%AF%D9%86.mp4?alt=media&token=4fe72c56-80ea-454f-b319-dd8134d1fd40'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'الثاني الابتدائي الفصل الدراسي الأول علوم الفصل الثالث - الدرس الاول - أماكن العيش (2)',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20-%20%D8%A7%D9%84%D8%AF%D8%B1%D8%B3%20%D8%A7%D9%84%D8%A7%D9%88%D9%84%20-%20%D8%A3%D9%85%D8%A7%D9%83%D9%86%20%D8%A7%D9%84%D8%B9%D9%8A%D8%B4%20(2).mp4?alt=media&token=719e6424-a68b-44ee-95b9-8016a8f7cac3'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'الثاني الابتدائي الفصل الدراسي الأول علوم الفصل الثالث - الدرس الاول - أماكن العيش',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20-%20%D8%A7%D9%84%D8%AF%D8%B1%D8%B3%20%D8%A7%D9%84%D8%A7%D9%88%D9%84%20-%20%D8%A3%D9%85%D8%A7%D9%83%D9%86%20%D8%A7%D9%84%D8%B9%D9%8A%D8%B4.mp4?alt=media&token=a326208c-ee93-4ff1-8595-e94648f294bf'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'الثاني الابتدائي الفصل الدراسي الأول علوم الفصل الثالث - الدرس الثاني- سلاسل الغذاء',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20-%20%D8%A7%D9%84%D8%AF%D8%B1%D8%B3%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A-%20%D8%B3%D9%84%D8%A7%D8%B3%D9%84%20%D8%A7%D9%84%D8%BA%D8%B0%D8%A7%D8%A1.mp4?alt=media&token=9584260b-b158-4b26-b80e-b8c3d0283426'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'الثاني الابتدائي الفصل الدراسي الأول علوم الفصل الثاني - الدرس الأول-مجموعة الحيوانات',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20-%20%D8%A7%D9%84%D8%AF%D8%B1%D8%B3%20%D8%A7%D9%84%D8%A3%D9%88%D9%84-%D9%85%D8%AC%D9%85%D9%88%D8%B9%D8%A9%20%D8%A7%D9%84%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA.mp4?alt=media&token=e8421bab-e0d2-48a8-97b0-fc94a7a60bbd'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'الثاني الابتدائي الفصل الدراسي الأول علوم مراجعة الفصل الثالث',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%B1%D8%A7%D8%AC%D8%B9%D8%A9%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB.mp4?alt=media&token=004e5ef8-7183-427c-905e-882793a5699f'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'الثاني الابتدائي الفصل الدراسي الأول علوم مراجعة الفصل الثاني',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%B1%D8%A7%D8%AC%D8%B9%D8%A9%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A.mp4?alt=media&token=52c4f79a-ab32-429d-8a6f-94199f8dea4c'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'الثاني الابتدائي الفصل الدراسي الأول علوم مراجعة الفصل الرابع',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%B1%D8%A7%D8%AC%D8%B9%D8%A9%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9.mp4?alt=media&token=09164c58-7fc9-458b-b6e3-1aa3e39c02c8'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'الصف الثاني الابتدائي الفصل الدراسي الأول علوم المهارات والطريقة العلمية',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-a853c.appspot.com/o/2%2F%D8%A7%D9%84%D8%B5%D9%81%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA%20%D9%88%D8%A7%D9%84%D8%B7%D8%B1%D9%8A%D9%82%D8%A9%20%D8%A7%D9%84%D8%B9%D9%84%D9%85%D9%8A%D8%A9.mp4?alt=media&token=512c4fd4-c53e-43d7-bb93-a5fa518bff30'
        },
    ],
    [
        {
            'name': 'video10.mp4',
            'videoName': 'الثاني الإبتدائي الفصل الدراسي الثاني 1438 علوم سبب حدوث الفصول',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/2-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%D8%B3%D8%A8%D8%A8%20%D8%AD%D8%AF%D9%88%D8%AB%20%D8%A7%D9%84%D9%81%D8%B5%D9%88%D9%84.mp4?alt=media&token=b9823315-f7e6-49e7-a2b8-3876fc44640e'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'الثاني الإبتدائي الفصل الدراسي الثاني  علوم ما سبب حدوث الفصول 1',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/2-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%D9%85%D8%A7%20%D8%B3%D8%A8%D8%A8%20%D8%AD%D8%AF%D9%88%D8%AB%20%D8%A7%D9%84%D9%81%D8%B5%D9%88%D9%84%201.mp4?alt=media&token=f626fd75-3c79-4723-bae0-a5dccb935db4'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'الثاني الإبتدائي الفصل الدراسي الثاني 1438 علوم مراجعة الفصل السابع',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/2-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%D9%85%D8%B1%D8%A7%D8%AC%D8%B9%D8%A9%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%B3%D8%A7%D8%A8%D8%B9.mp4?alt=media&token=80b1af34-fd35-4c1f-a5f5-c0ae6ecbc285'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'الثاني الابتدائي الفصل الدراسي الثاني علوم النظام الشمسي (2)',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/2-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%86%D8%B8%D8%A7%D9%85%20%D8%A7%D9%84%D8%B4%D9%85%D8%B3%D9%8A%20(2).mp4?alt=media&token=f9b7bbe6-77de-4d16-a00e-b5ad9aed39bd'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'الثاني الابتدائي الفصل الدراسي الثاني علوم النظام الشمسي (3)',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/2-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%86%D8%B8%D8%A7%D9%85%20%D8%A7%D9%84%D8%B4%D9%85%D8%B3%D9%8A%20(3).mp4?alt=media&token=0286bb5c-9f3f-42e4-907f-d8517282290a'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'الثاني الابتدائي الفصل الدراسي الثاني 1438 العلوم الفصل التاسع نظرة الى المادة',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/2-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AA%D8%A7%D8%B3%D8%B9%20%20%D9%86%D8%B8%D8%B1%D8%A9%20%D8%A7%D9%84%D9%89%20%D8%A7%D9%84%D9%85%D8%A7%D8%AF%D8%A9.mp4?alt=media&token=e4f93426-1ac3-42cc-a645-8fe433dcadf0'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'الثاني الابتدائي الفصل الدراسي الثاني 1438 العلوم المواد الصلبة',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/2-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%AF%20%D8%A7%D9%84%D8%B5%D9%84%D8%A8%D8%A9.mp4?alt=media&token=ecc30834-7312-44d7-aa0a-b318b13df008'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'الثاني الابتدائي الفصل الدراسي الثاني 1438 علوم أفكر واتحدث وأكتب',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/2-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A3%D9%81%D9%83%D8%B1%20%D9%88%D8%A7%D8%AA%D8%AD%D8%AF%D8%AB%20%D9%88%D8%A3%D9%83%D8%AA%D8%A8.mp4?alt=media&token=3bfeb59d-ea9d-4520-afcf-2713b6e91f06'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'الثاني الابتدائي الفصل الدراسي الثاني 1438 علوم الأرض والسماء',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/2-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%A3%D8%B1%D8%B6%20%D9%88%D8%A7%D9%84%D8%B3%D9%85%D8%A7%D8%A1.mp4?alt=media&token=4d34ff73-d058-4769-8c13-c0f4d7f22200'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'الثاني الابتدائي الفصل الدراسي الثاني 1438 علوم الفصل التاسع نظرة الى المادة',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/2-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AA%D8%A7%D8%B3%D8%B9%20%D9%86%D8%B8%D8%B1%D8%A9%20%D8%A7%D9%84%D9%89%20%D8%A7%D9%84%D9%85%D8%A7%D8%AF%D8%A9.mp4?alt=media&token=ae0810e2-95bb-405f-a63f-ca79595386ca'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'الثاني الابتدائي الفصل الدراسي الثاني 1438 علوم الفصل التاسع- الغازات',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/2-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AA%D8%A7%D8%B3%D8%B9-%20%D8%A7%D9%84%D8%BA%D8%A7%D8%B2%D8%A7%D8%AA.mp4?alt=media&token=52320dcb-a8db-4573-8d1c-3e59ea2b48b8'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'الثاني الابتدائي الفصل الدراسي الثاني 1438 علوم الفصل التاسع-السوائل والغازات',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/2-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AA%D8%A7%D8%B3%D8%B9-%D8%A7%D9%84%D8%B3%D9%88%D8%A7%D8%A6%D9%84%20%D9%88%D8%A7%D9%84%D8%BA%D8%A7%D8%B2%D8%A7%D8%AA.mp4?alt=media&token=aa7bff91-1f61-4330-88b4-24138a8d4d5b'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'الثاني الابتدائي الفصل الدراسي الثاني 1438 علوم الفصل الحادي عشر القوى',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/2-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AD%D8%A7%D8%AF%D9%8A%20%D8%B9%D8%B4%D8%B1%20%D8%A7%D9%84%D9%82%D9%88%D9%89.mp4?alt=media&token=56b37a8b-6d30-43b6-9890-3731a77ada21'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'الثاني الابتدائي الفصل الدراسي الثاني 1438 علوم القوى تحرك الاشياء',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/2-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%82%D9%88%D9%89%20%D8%AA%D8%AD%D8%B1%D9%83%20%D8%A7%D9%84%D8%A7%D8%B4%D9%8A%D8%A7%D8%A1.mp4?alt=media&token=d563112f-f3e9-40d6-be4f-5e1133af9fb8'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'الثاني الابتدائي الفصل الدراسي الثاني 1438 علوم الليل والنهار',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/2-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%84%D9%8A%D9%84%20%D9%88%D8%A7%D9%84%D9%86%D9%87%D8%A7%D8%B1.mp4?alt=media&token=4d14394e-1b61-49fb-93f1-dabc831380ff'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'الثاني الابتدائي الفصل الدراسي الثاني 1438 علوم انواع القوى',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/2-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%86%D9%88%D8%A7%D8%B9%20%D8%A7%D9%84%D9%82%D9%88%D9%89.mp4?alt=media&token=6c7ceda4-a009-4194-860d-557f6cd2109a'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'الثاني الابتدائي الفصل الدراسي الثاني 1438 علوم لماذا تبدو الشمس وكأنها تتحرك',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/2-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%84%D9%85%D8%A7%D8%B0%D8%A7%20%D8%AA%D8%A8%D8%AF%D9%88%20%D8%A7%D9%84%D8%B4%D9%85%D8%B3%20%D9%88%D9%83%D8%A3%D9%86%D9%87%D8%A7%20%D8%AA%D8%AA%D8%AD%D8%B1%D9%83.mp4?alt=media&token=4345f9d2-4df3-48cb-99c5-8ae1af7c7516'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'الثاني الابتدائي الفصل الدراسي الثاني 1438 علوم لماذا تبدوا الشمس وكأنها تتحرك 1',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/2-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%84%D9%85%D8%A7%D8%B0%D8%A7%20%D8%AA%D8%A8%D8%AF%D9%88%D8%A7%20%D8%A7%D9%84%D8%B4%D9%85%D8%B3%20%D9%88%D9%83%D8%A3%D9%86%D9%87%D8%A7%20%D8%AA%D8%AA%D8%AD%D8%B1%D9%83%201.mp4?alt=media&token=d8789bd2-0abb-4753-9af2-d730416b150a'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'الثاني الابتدائي الفصل الدراسي الثاني 1438 علوم مراجعة الفصل الثامن',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/2-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%B1%D8%A7%D8%AC%D8%B9%D8%A9%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AB%D8%A7%D9%85%D9%86.mp4?alt=media&token=a02787a6-81ab-4388-b7c5-85200126d2f4'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'الثاني الابتدائي الفصل الدراسي الثاني 1438 علوم المغناطيسيات',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/2-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D9%85%D8%BA%D9%86%D8%A7%D8%B7%D9%8A%D8%B3%D9%8A%D8%A7%D8%AA.mp4?alt=media&token=fd199161-def4-463e-b702-cb601715abf7'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'الثاني الابتدائي الفصل الدراسي الثاني 1438 علوم مراجعة الفصل الثامن',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/2-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%B1%D8%A7%D8%AC%D8%B9%D8%A9%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AB%D8%A7%D9%85%D9%86.mp4?alt=media&token=b3b10012-4ed3-4feb-9f2c-165c4028fc0a'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'الثاني الابتدائي الفصل الدراسي الثاني علوم الليل والنهار لماذا تبدوا الشمس وكانها تتحرك؟',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/2-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%84%D9%8A%D9%84%20%D9%88%D8%A7%D9%84%D9%86%D9%87%D8%A7%D8%B1%20%20%D9%84%D9%85%D8%A7%D8%B0%D8%A7%20%D8%AA%D8%A8%D8%AF%D9%88%D8%A7%20%D8%A7%D9%84%D8%B4%D9%85%D8%B3%20%D9%88%D9%83%D8%A7%D9%86%D9%87%D8%A7%20%D8%AA%D8%AA%D8%AD%D8%B1%D9%83%D8%9F.mp4?alt=media&token=1d9fedd3-1851-44d7-844c-4c96fe7df4e4'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'الثاني الابتدائي الفصل الدراسي الثاني علوم جهاز الغدد الصماء والتكاثر',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/2-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%AC%D9%87%D8%A7%D8%B2%20%D8%A7%D9%84%D8%BA%D8%AF%D8%AF%20%D8%A7%D9%84%D8%B5%D9%85%D8%A7%D8%A1%20%D9%88%D8%A7%D9%84%D8%AA%D9%83%D8%A7%D8%AB%D8%B1.mp4?alt=media&token=e9986627-5977-461d-810a-214ec8b7afec'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'الثاني الابتدائي الفصل الدراسي الثاني علوم سبب حدوث الفصول بماذا نصف الفصول؟',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/2-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%B3%D8%A8%D8%A8%20%D8%AD%D8%AF%D9%88%D8%AB%20%D8%A7%D9%84%D9%81%D8%B5%D9%88%D9%84%20%20%D8%A8%D9%85%D8%A7%D8%B0%D8%A7%20%D9%86%D8%B5%D9%81%20%D8%A7%D9%84%D9%81%D8%B5%D9%88%D9%84%D8%9F.mp4?alt=media&token=6e695f0a-0084-4417-b2e0-de9a958c2142'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'الثاني الابتدائي الفصل الدراسي الثاني 1438 علوم الغازات',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/2-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%BA%D8%A7%D8%B2%D8%A7%D8%AA.mp4?alt=media&token=455fe532-9eec-4c45-80d1-16a6f899b531'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'الثاني الابتدائي الفصل الدراسي الثاني 1438 علوم الفصل التاسع-السوائل والغازات',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/2-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AA%D8%A7%D8%B3%D8%B9-%D8%A7%D9%84%D8%B3%D9%88%D8%A7%D8%A6%D9%84%20%D9%88%D8%A7%D9%84%D8%BA%D8%A7%D8%B2%D8%A7%D8%AA.mp4?alt=media&token=6e74901b-c53e-4301-b39b-1f125de71320'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'الثاني الابتدائي الفصل الدراسي الثاني 1438 علوم الفصل الثاني عشر استعمال الطاقة',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/2-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%B9%D8%B4%D8%B1%20%D8%A7%D8%B3%D8%AA%D8%B9%D9%85%D8%A7%D9%84%20%D8%A7%D9%84%D8%B7%D8%A7%D9%82%D8%A9.mp4?alt=media&token=8e92c5d3-feeb-4427-90db-0fae8df2e71b'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'الثاني الابتدائي الفصل الدراسي الثاني 1438 علوم ماالنجوم؟',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/2-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%A7%D8%A7%D9%84%D9%86%D8%AC%D9%88%D9%85%D8%9F.mp4?alt=media&token=f388dc74-6098-4088-8483-4c1645cf6a65'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'الثاني الابتدائي الفصل الدراسي الثاني 1438 علوم القمروالنجوم',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/2-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D9%82%D9%85%D8%B1%D9%88%D8%A7%D9%84%D9%86%D8%AC%D9%88%D9%85.mp4?alt=media&token=8ee40b15-d235-4db7-bb78-2716480da6f5'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'الثاني الابتدائي الفصل الدراسي الثاني 1438 علوم الفصل الثامن-السماء',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/2-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AB%D8%A7%D9%85%D9%86-%D8%A7%D9%84%D8%B3%D9%85%D8%A7%D8%A1.mp4?alt=media&token=dc4a8ffc-6026-4e79-9c38-6a3a48440263'
        },
    ],
    [
        {
            'name': 'video5-1.mp4',
            'videoName': 'الثالث الإبتدائي الفصل الدراسي الأول علوم المخلوقات الحية وحاجاتها',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/3%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%20%D8%A7%D9%84%D9%85%D8%AE%D9%84%D9%88%D9%82%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A9%20%D9%88%D8%AD%D8%A7%D8%AC%D8%A7%D8%AA%D9%87%D8%A7%20(2).mp4?alt=media&token=4b5c7fb6-4691-4556-8795-99a455a25751'
        },
        {
            'name': 'video5-1.mp4',
            'videoName': 'الثالث الإبتدائي الفصل الدراسي الأول علوم السلاسل والشبكات الغذائية',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/3%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D8%B3%D9%84%20%D9%88%D8%A7%D9%84%D8%B4%D8%A8%D9%83%D8%A7%D8%AA%20%D8%A7%D9%84%D8%BA%D8%B0%D8%A7%D8%A6%D9%8A%D8%A9.mp4?alt=media&token=e956967e-0a74-41f7-ab3e-ae64dabb82f1'
        },
        {
            'name': 'video5-1.mp4',
            'videoName': 'الثالث الإبتدائي الفصل الدراسي الأول علوم النباتات وأجزاؤها',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/3%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA%20%D9%88%D8%A3%D8%AC%D8%B2%D8%A7%D8%A4%D9%87%D8%A7.mp4?alt=media&token=30e0be28-5686-40f9-84de-949ef0787b13'
        },
        {
            'name': 'video5-1.mp4',
            'videoName': 'الثالث الإبتدائي الفصل الدراسي الأول علوم النباتات',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/3%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA.mp4?alt=media&token=c5ad26cd-3e6f-41d7-8bcf-1f8641a1a162'
        },
        {
            'name': 'video13.mp4',
            'videoName': 'الثالث الإبتدائي الفصل الدراسي الأول علوم دورة حياة الحيوانات 2',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/3%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%AF%D9%88%D8%B1%D8%A9%20%D8%AD%D9%8A%D8%A7%D8%A9%20%D8%A7%D9%84%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA%202.mp4?alt=media&token=cc7b98c9-3b39-4cf4-a73c-0deebea4a6e9'
        },
        {
            'name': 'video13.mp4',
            'videoName': 'الثالث الإبتدائي l الفصل الدراسي الأول lعلوم l النباتات وأجزاؤها',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/3%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20l%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20l%D8%B9%D9%84%D9%88%D9%85%20%20l%20%D8%A7%D9%84%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA%20%D9%88%D8%A3%D8%AC%D8%B2%D8%A7%D8%A4%D9%87%D8%A7.mp4?alt=media&token=ce6aad0b-31f3-4f86-a59f-139315b1b6a3'
        },
        {
            'name': 'video13.mp4',
            'videoName': 'الثالث الاإبتدائي الفصل الدراسي الأول علوم التكيف',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/3%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%A7%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AA%D9%83%D9%8A%D9%81.mp4?alt=media&token=f5261cb6-1be0-43e6-993f-42cf306ee28b'
        },
        {
            'name': 'video13.mp4',
            'videoName': 'الثالث الابتدائي الفصل الدراسي الأول العلوم التربة 1',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/3%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D8%A9%201.mp4?alt=media&token=8d14eadf-5833-4259-82b8-5d7885ef6394'
        },
        {
            'name': 'video13.mp4',
            'videoName': 'الثالث الابتدائي الفصل الدراسي الأول العلوم التربة 2',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/3%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D8%A9%202.mp4?alt=media&token=41602482-5d53-4e09-a6c7-e9b59d3c3c58'
        },
        {
            'name': 'video13.mp4',
            'videoName': 'الثالث الابتدائي الفصل الدراسي الأول علوم المخلوقات الحية وحاجاتها2',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/3%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%85%D8%AE%D9%84%D9%88%D9%82%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A9%20%D9%88%D8%AD%D8%A7%D8%AC%D8%A7%D8%AA%D9%87%D8%A72.mp4?alt=media&token=ac25921a-e952-45e2-87d9-3c8301f0d0a8'
        },
        {
            'name': 'video13.mp4',
            'videoName': 'الثالث الابتدائي الفصل الدراسي الأول علوم دورة حياة الحيوانات',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/3%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%AF%D9%88%D8%B1%D8%A9%20%D8%AD%D9%8A%D8%A7%D8%A9%20%D8%A7%D9%84%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA.mp4?alt=media&token=82bb1fce-00d0-4661-b466-42d7e0422092'
        },
    ],
    [
        {
            'name': 'video16.mp4',
            'videoName': 'الثالث الابتدائي الفصل الدراسي الثاني علوم حالات المادة ما السوائل؟ وما الغازات؟',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/3-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%20%D8%AD%D8%A7%D9%84%D8%A7%D8%AA%20%D8%A7%D9%84%D9%85%D8%A7%D8%AF%D8%A9%20%20%20%D9%85%D8%A7%20%D8%A7%D9%84%D8%B3%D9%88%D8%A7%D8%A6%D9%84%D8%9F%20%D9%88%D9%85%D8%A7%20%D8%A7%D9%84%D8%BA%D8%A7%D8%B2%D8%A7%D8%AA%D8%9F.mp4?alt=media&token=7f4b3d19-9f61-42c9-ab89-5beeee0485a2'
        },
        {
            'name': 'video17.mp4',
            'videoName': 'الثالث الإبتدائي الفصل الدراسي الثاني 1438 علوم التعامل مع الطقس القاسي',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/3-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AA%D8%B9%D8%A7%D9%85%D9%84%20%D9%85%D8%B9%20%D8%A7%D9%84%D8%B7%D9%82%D8%B3%20%D8%A7%D9%84%D9%82%D8%A7%D8%B3%D9%8A.mp4?alt=media&token=fcebf92f-d82b-4e24-ba91-e20b7f814ff1'
        },
        {
            'name': 'video18.mp4',
            'videoName': 'الثالث الإبتدائي الفصل الدراسي الثاني 1438 علوم مراجعة الفصل السابع (الطقس وتقلباته)',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/3-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%D9%85%D8%B1%D8%A7%D8%AC%D8%B9%D8%A9%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%B3%D8%A7%D8%A8%D8%B9%20(%D8%A7%D9%84%D8%B7%D9%82%D8%B3%20%D9%88%D8%AA%D9%82%D9%84%D8%A8%D8%A7%D8%AA%D9%87).mp4?alt=media&token=46d9f194-c52f-43fa-b2c2-10e2004302a4'
        },
        {
            'name': 'video18.mp4',
            'videoName': 'الثالث الابتدائي الفصل الدراسي الثاني علوم التغيرات الفيزيائية ماذا يحدث عند خلط المواد؟',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/3-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AA%D8%BA%D9%8A%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D9%81%D9%8A%D8%B2%D9%8A%D8%A7%D8%A6%D9%8A%D8%A9%20%20%D9%85%D8%A7%D8%B0%D8%A7%20%D9%8A%D8%AD%D8%AF%D8%AB%20%D8%B9%D9%86%D8%AF%20%D8%AE%D9%84%D8%B7%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%AF%D8%9F.mp4?alt=media&token=d69438eb-b332-445b-ae63-b231f5a8acb9'
        },
        {
            'name': 'video18.mp4',
            'videoName': 'الثالث الابتدائي الفصل الدراسي الثاني علوم الضوء لماذا أرى الألوان؟',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/3-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B6%D9%88%D8%A1%20%20%D9%84%D9%85%D8%A7%D8%B0%D8%A7%20%D8%A3%D8%B1%D9%89%20%D8%A7%D9%84%D8%A3%D9%84%D9%88%D8%A7%D9%86%D8%9F.mp4?alt=media&token=a7225078-b75d-4216-8092-3df5dcdcdbff'
        },
        {
            'name': 'video18.mp4',
            'videoName': 'الثالث الابتدائي الفصل الدراسي الثاني علوم القوى ما أنواع القوى؟',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/3-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%82%D9%88%D9%89%20%20%D9%85%D8%A7%20%D8%A3%D9%86%D9%88%D8%A7%D8%B9%20%D8%A7%D9%84%D9%82%D9%88%D9%89%D8%9F.mp4?alt=media&token=fdbe76bd-43e4-4e86-bddc-8a7f500ed3d8'
        },
        {
            'name': 'video18.mp4',
            'videoName': 'الثالث الابتدائي الفصل الدراسي الثاني علوم المادة وقياساتها ما المادة؟',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/3-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%85%D8%A7%D8%AF%D8%A9%20%D9%88%D9%82%D9%8A%D8%A7%D8%B3%D8%A7%D8%AA%D9%87%D8%A7%20%20%D9%85%D8%A7%20%D8%A7%D9%84%D9%85%D8%A7%D8%AF%D8%A9%D8%9F.mp4?alt=media&token=4d21d46d-e648-4a6e-9378-bf1cf86bb591'
        },
        {
            'name': 'video18.mp4',
            'videoName': 'الثالث الابتدائي الفصل الدراسي الثاني علوم المناخ وفصول السنة ما فصول السنة؟',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/3-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%85%D9%86%D8%A7%D8%AE%20%D9%88%D9%81%D8%B5%D9%88%D9%84%20%D8%A7%D9%84%D8%B3%D9%86%D8%A9%20%20%D9%85%D8%A7%20%D9%81%D8%B5%D9%88%D9%84%20%D8%A7%D9%84%D8%B3%D9%86%D8%A9%D8%9F.mp4?alt=media&token=cc35d49f-a529-4c27-a9d5-5a49f660a593'
        },
        {
            'name': 'video18.mp4',
            'videoName': 'الثالث الابتدائي الفصل الدراسي الثاني علوم تقلبات الطقس - ما نوع الغيوم المختلفة',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/3-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%AA%D9%82%D9%84%D8%A8%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B7%D9%82%D8%B3%20-%20%D9%85%D8%A7%20%D9%86%D9%88%D8%B9%20%D8%A7%D9%84%D8%BA%D9%8A%D9%88%D9%85%20%D8%A7%D9%84%D9%85%D8%AE%D8%AA%D9%84%D9%81%D8%A9.mp4?alt=media&token=f71e0c43-bf08-429d-9ad7-c87ed685ee81'
        },
        {
            'name': 'video18.mp4',
            'videoName': 'الثالث الابتدائي الفصل الدراسي الثاني علوم دورة الماء كيف تتشكل الغيوم',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/3-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%AF%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D9%85%D8%A7%D8%A1%20%20%D9%83%D9%8A%D9%81%20%D8%AA%D8%AA%D8%B4%D9%83%D9%84%20%D8%A7%D9%84%D8%BA%D9%8A%D9%88%D9%85.mp4?alt=media&token=69acd96a-21c1-41c6-b5b7-c71357a88dca'
        },
        {
            'name': 'video18.mp4',
            'videoName': 'الثالث الابتدائي الفصل الدراسي الثاني علوم عناصر الطقس - كيف اصف الطقس',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/3-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%B9%D9%86%D8%A7%D8%B5%D8%B1%20%D8%A7%D9%84%D8%B7%D9%82%D8%B3%20-%20%D9%83%D9%8A%D9%81%20%D8%A7%D8%B5%D9%81%20%D8%A7%D9%84%D8%B7%D9%82%D8%B3.mp4?alt=media&token=dd2e7526-7775-4cb9-a7c1-5c000e4cffef'
        },
        {
            'name': 'video18.mp4',
            'videoName': 'الثالث الابتدائي الفصل الدراسي الثاني علوم ما هو الضوء؟',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/3-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%A7%20%D9%87%D9%88%20%D8%A7%D9%84%D8%B6%D9%88%D8%A1%D8%9F.mp4?alt=media&token=fbafbe8c-5b18-48de-89e1-5f6465f8dfd8'
        },
        {
            'name': 'video18.mp4',
            'videoName': 'الثالث الابتدائي الفصل الدراسي الثاني علوم مراجعة الوحدة الخامسة المادة.mp4',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/3-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%B1%D8%A7%D8%AC%D8%B9%D8%A9%20%D8%A7%D9%84%D9%88%D8%AD%D8%AF%D8%A9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%D8%A9%20%20%D8%A7%D9%84%D9%85%D8%A7%D8%AF%D8%A9.mp4?alt=media&token=a1234fe6-a68f-4f13-85e0-d846b2e86f0d'
        },
        {
            'name': 'video18.mp4',
            'videoName': 'الثالث الابتدائي الفصل الدراسي الثاني علوم مراجعة الوحدة الرابعة الطقس والمناخ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/3-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%B1%D8%A7%D8%AC%D8%B9%D8%A9%20%D8%A7%D9%84%D9%88%D8%AD%D8%AF%D8%A9%20%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%D8%A9%20%20%D8%A7%D9%84%D8%B7%D9%82%D8%B3%20%D9%88%D8%A7%D9%84%D9%85%D9%86%D8%A7%D8%AE.mp4?alt=media&token=2dca153d-edfc-42b4-b655-afee04d301e1'
        },
        {
            'name': 'video18.mp4',
            'videoName': 'الثالث الابتدائي الفصل الدراسي الثاني علوم تقلبات الطقس ما انواع الطقس القاسي؟',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/3-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%D8%AA%D9%82%D9%84%D8%A8%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B7%D9%82%D8%B3%20%20%D9%85%D8%A7%20%D8%A7%D9%86%D9%88%D8%A7%D8%B9%20%D8%A7%D9%84%D8%B7%D9%82%D8%B3%20%D8%A7%D9%84%D9%82%D8%A7%D8%B3%D9%8A%D8%9F.mp4?alt=media&token=c8960b5d-1a72-4cd1-9cd9-24135fd330f6'
        },
        {
            'name': 'video18.mp4',
            'videoName': 'الثالث الابتدائي الفصل الدراسي الثاني علوم دورة الماء واشكال الهطول',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/3-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%D8%AF%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D9%85%D8%A7%D8%A1%20%D9%88%D8%A7%D8%B4%D9%83%D8%A7%D9%84%20%D8%A7%D9%84%D9%87%D8%B7%D9%88%D9%84.mp4?alt=media&token=dc23fb23-ff85-4c24-b493-73fa526191a6'
        },
        {
            'name': 'video18.mp4',
            'videoName': 'الثالث الابتدائي الفصل الدراسي الثاني 1438 علوم الاحتكاك',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/3-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%A7%D8%AD%D8%AA%D9%83%D8%A7%D9%83.mp4?alt=media&token=b0a2a30a-b6e2-4e1d-9202-13ba357d6153'
        },
        {
            'name': 'video18.mp4',
            'videoName': 'الثالث الابتدائي الفصل الدراسي الثاني 1438 علوم السرعة',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/3-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B3%D8%B1%D8%B9%D8%A9.mp4?alt=media&token=c6f38197-5986-4710-9db7-60aee631ca7f'
        },
        {
            'name': 'video18.mp4',
            'videoName': 'الثالث الابتدائي الفصل الدراسي الثاني 1438 علوم العواصف والإعصار',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/3-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B9%D9%88%D8%A7%D8%B5%D9%81%20%D9%88%D8%A7%D9%84%D8%A5%D8%B9%D8%B5%D8%A7%D8%B1.mp4?alt=media&token=d82ac361-1fa3-4fa8-b256-07d6b5bc857f'
        },
        {
            'name': 'video18.mp4',
            'videoName': 'الثالث الابتدائي الفصل الدراسي الثاني 1438 علوم المادة وخصائصها',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/3-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%85%D8%A7%D8%AF%D8%A9%20%D9%88%D8%AE%D8%B5%D8%A7%D8%A6%D8%B5%D9%87%D8%A7.mp4?alt=media&token=6afac384-bf25-4699-ab29-d29f1f356338'
        },
        {
            'name': 'video18.mp4',
            'videoName': 'الثالث الابتدائي الفصل الدراسي الثاني 1438 علوم المواد الصلبة',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/3-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%AF%20%D8%A7%D9%84%D8%B5%D9%84%D8%A8%D8%A9.mp4?alt=media&token=706034b6-4d8e-4576-989b-e495e1e94dad'
        },
        {
            'name': 'video18.mp4',
            'videoName': 'الثالث الابتدائي الفصل الدراسي الثاني 1438 علوم انواع القوى',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/3-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%86%D9%88%D8%A7%D8%B9%20%20%D8%A7%D9%84%D9%82%D9%88%D9%89.mp4?alt=media&token=56dfa411-9731-4657-8ec3-75ec441b3d25'
        },
        {
            'name': 'video18.mp4',
            'videoName': 'الثالث الابتدائي الفصل الدراسي الثاني 1438 علوم مراجعة الفصل الثامن(دورة الماء والمناخ)',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/3-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%B1%D8%A7%D8%AC%D8%B9%D8%A9%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AB%D8%A7%D9%85%D9%86(%D8%AF%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D9%85%D8%A7%D8%A1%20%D9%88%D8%A7%D9%84%D9%85%D9%86%D8%A7%D8%AE).mp4?alt=media&token=1ce463ad-b6af-4d77-9772-a7f396146ba8'
        },
        {
            'name': 'video18.mp4',
            'videoName': 'الثالث الابتدائي الفصل الدراسي الثاني 1438 علوم مكونات المادة',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/3-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D9%83%D9%88%D9%86%D8%A7%D8%AA%20%D8%A7%D9%84%D9%85%D8%A7%D8%AF%D8%A9.mp4?alt=media&token=af0af3aa-8307-4367-915c-e0ccd110f249'
        },
        {
            'name': 'video18.mp4',
            'videoName': 'الثالث الابتدائي الفصل الدراسي الثاني العلوم مااشكال الهطول؟',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/3-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%A7%D8%A7%D8%B4%D9%83%D8%A7%D9%84%20%D8%A7%D9%84%D9%87%D8%B7%D9%88%D9%84%D8%9F.mp4?alt=media&token=ec2f6bbc-e474-4e8e-8d7e-63dee4ed06db'
        },
        {
            'name': 'video18.mp4',
            'videoName': 'الثالث الابتدائي الفصل الدراسي الثاني علوم المناخ وفصول السنة ما المناخ؟',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/3-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%85%D9%86%D8%A7%D8%AE%20%D9%88%D9%81%D8%B5%D9%88%D9%84%20%D8%A7%D9%84%D8%B3%D9%86%D8%A9%20%20%20%D9%85%D8%A7%20%D8%A7%D9%84%D9%85%D9%86%D8%A7%D8%AE%D8%9F.mp4?alt=media&token=b582cf83-a923-49bf-b8db-baf82957fe0a'
        },
        {
            'name': 'video18.mp4',
            'videoName': 'الثالث الابتدائي الفصل الدراسي الثاني علوم تقلبات الطقس- ما انواع الغيوم المختلفة',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/3-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%AA%D9%82%D9%84%D8%A8%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B7%D9%82%D8%B3-%20%D9%85%D8%A7%20%D8%A7%D9%86%D9%88%D8%A7%D8%B9%20%D8%A7%D9%84%D8%BA%D9%8A%D9%88%D9%85%20%D8%A7%D9%84%D9%85%D8%AE%D8%AA%D9%84%D9%81%D8%A9.mp4?alt=media&token=2b438a99-5484-4035-970e-1fd4dde92f81'
        },
        {
            'name': 'video18.mp4',
            'videoName': 'الثالث الابتدائي الفصل الدراسي الثاني علوم عناصر الطقس - ما الطقس؟',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/3-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%B9%D9%86%D8%A7%D8%B5%D8%B1%20%D8%A7%D9%84%D8%B7%D9%82%D8%B3%20-%20%D9%85%D8%A7%20%D8%A7%D9%84%D8%B7%D9%82%D8%B3%D8%9F.mp4?alt=media&token=2daf644f-871f-40a5-aeb4-e381705390d0'
        },
        {
            'name': 'video18.mp4',
            'videoName': 'الثالث الابتدائي الفصل الدراسي الثاني علوم ما التغيرات الفيزيائية؟',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/3-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%A7%20%D8%A7%D9%84%D8%AA%D8%BA%D9%8A%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D9%81%D9%8A%D8%B2%D9%8A%D8%A7%D8%A6%D9%8A%D8%A9%D8%9F.mp4?alt=media&token=32468222-4f71-45cc-8c4d-8c056008a1cc'
        },
        {
            'name': 'video18.mp4',
            'videoName': 'الثالث الابتدائي الفصل الدراسي الثاني  علوم كيف اسمع الاصوات؟',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/3-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%83%D9%8A%D9%81%20%D8%A7%D8%B3%D9%85%D8%B9%20%D8%A7%D9%84%D8%A7%D8%B5%D9%88%D8%A7%D8%AA%D8%9F.mp4?alt=media&token=e4518a54-6212-49da-a51a-b5911428c264'
        },
        {
            'name': 'video18.mp4',
            'videoName': 'الثالث الابتدائي الفصل الدراسي الثاني  علوم كيف تختلف الاصوات؟',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/3-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%83%D9%8A%D9%81%20%D8%AA%D8%AE%D8%AA%D9%84%D9%81%20%D8%A7%D9%84%D8%A7%D8%B5%D9%88%D8%A7%D8%AA%D8%9F.mp4?alt=media&token=63954cc6-33dd-4848-82f9-7ae1ca6f8504'
        },
    ],
    [
        {
            'name': 'video19.mp4',
            'videoName': 'الرابع الإبتدائي الفصل الدراسي الأول علوم أعمل كالعلماء - الطريقة العلمية',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A3%D8%B9%D9%85%D9%84%20%D9%83%D8%A7%D9%84%D8%B9%D9%84%D9%85%D8%A7%D8%A1%20-%20%D8%A7%D9%84%D8%B7%D8%B1%D9%8A%D9%82%D8%A9%20%D8%A7%D9%84%D8%B9%D9%84%D9%85%D9%8A%D8%A9.mp4?alt=media&token=d0121030-4c92-481b-af49-14e3f555488d'
        },
        {
            'name': 'video20.mp4',
            'videoName': 'الرابع الإبتدائي الفصل الدراسي الأول علوم الخلايا - كيف تنتظم الخلايا؟',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AE%D9%84%D8%A7%D9%8A%D8%A7%20-%20%D9%83%D9%8A%D9%81%20%D8%AA%D9%86%D8%AA%D8%B8%D9%85%20%D8%A7%D9%84%D8%AE%D9%84%D8%A7%D9%8A%D8%A7%D8%9F.mp4?alt=media&token=bae8e5ae-f56e-4cfe-b5c0-5abe882d58e4'
        },
        {
            'name': 'video20.mp4',
            'videoName': 'الرابع الإبتدائي الفصل الدراسي الأول علوم الخلايا النباتية والخلايا الحيوانية',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AE%D9%84%D8%A7%D9%8A%D8%A7%20%D8%A7%D9%84%D9%86%D8%A8%D8%A7%D8%AA%D9%8A%D8%A9%20%D9%88%D8%A7%D9%84%D8%AE%D9%84%D8%A7%D9%8A%D8%A7%20%D8%A7%D9%84%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D9%8A%D8%A9.mp4?alt=media&token=9522175c-2b3e-410c-ab69-9de95027ef82'
        },
        {
            'name': 'video20.mp4',
            'videoName': 'الرابع الإبتدائي الفصل الدراسي الأول علوم تحليل العلماء لبياناتهم-الطريقة العلمية-',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%AA%D8%AD%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D8%B9%D9%84%D9%85%D8%A7%D8%A1%20%D9%84%D8%A8%D9%8A%D8%A7%D9%86%D8%A7%D8%AA%D9%87%D9%85-%D8%A7%D9%84%D8%B7%D8%B1%D9%8A%D9%82%D8%A9%20%D8%A7%D9%84%D8%B9%D9%84%D9%85%D9%8A%D8%A9-.mp4?alt=media&token=e8491da2-0118-4428-a714-7e38278ff2af'
        },
        {
            'name': 'video20.mp4',
            'videoName': 'الرابع الإبتدائي الفصل الدراسي الأول علوم تصنيف المخلوقات الحية-ممالك المخلوقات الحية',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%AA%D8%B5%D9%86%D9%8A%D9%81%20%D8%A7%D9%84%D9%85%D8%AE%D9%84%D9%88%D9%82%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A9-%D9%85%D9%85%D8%A7%D9%84%D9%83%20%D8%A7%D9%84%D9%85%D8%AE%D9%84%D9%88%D9%82%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A9.mp4?alt=media&token=bcd2c9f5-ec8d-4d00-b9c3-02b21db0e431'
        },
        {
            'name': 'video20.mp4',
            'videoName': 'الرابع الإبتدائي الفصل الدراسي الأول علوم كيف يحلل العلماء البيانات؟ - المهارات العلمية',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%83%D9%8A%D9%81%20%D9%8A%D8%AD%D9%84%D9%84%20%D8%A7%D9%84%D8%B9%D9%84%D9%85%D8%A7%D8%A1%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A7%D9%86%D8%A7%D8%AA%D8%9F%20-%20%D8%A7%D9%84%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D9%84%D9%85%D9%8A%D8%A9.mp4?alt=media&token=67305758-5888-4227-b98c-982924a508de'
        },
        {
            'name': 'video20.mp4',
            'videoName': 'الرابع الإبتدائي الفصل الدراسي الأول علوم مراجعة الفصل الأول-ممالك المخلوقات الحية',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%B1%D8%A7%D8%AC%D8%B9%D8%A9%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%A3%D9%88%D9%84-%D9%85%D9%85%D8%A7%D9%84%D9%83%20%D8%A7%D9%84%D9%85%D8%AE%D9%84%D9%88%D9%82%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A9.mp4?alt=media&token=56ea24b6-0bec-4a95-b555-33bc8b1c93ae'
        },
        {
            'name': 'video20.mp4',
            'videoName': 'الرابع الإبتدائي الفصل الدراسي الأول 1438 علوم الحيوانات اللافقارية 1',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA%20%D8%A7%D9%84%D9%84%D8%A7%D9%81%D9%82%D8%A7%D8%B1%D9%8A%D8%A9%201.mp4?alt=media&token=b101125a-e888-4028-8249-9f345a1d12e3'
        },
        {
            'name': 'video20.mp4',
            'videoName': 'الرابع الإبتدائي الفصل الدراسي الأول 1438 علوم الحيوانات اللافقارية 2',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA%20%D8%A7%D9%84%D9%84%D8%A7%D9%81%D9%82%D8%A7%D8%B1%D9%8A%D8%A9%202.mp4?alt=media&token=5f52dbe8-7929-49e6-8d02-3a6d58717598'
        },
        {
            'name': 'video20.mp4',
            'videoName': 'الرابع الإبتدائي الفصل الدراسي الأول 1438 علوم الخلايا 3',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AE%D9%84%D8%A7%D9%8A%D8%A7%203.mp4?alt=media&token=390512d5-936d-436a-a3c4-313e6792a0ac'
        },
        {
            'name': 'video20.mp4',
            'videoName': 'الرابع الإبتدائي الفصل الدراسي الأول 1438 علوم الماء 1',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%85%D8%A7%D8%A1%201.mp4?alt=media&token=645aa504-7ec4-49b1-a574-973a32c01204'
        },
        {
            'name': 'video20.mp4',
            'videoName': 'الرابع الإبتدائي الفصل الدراسي الأول 1438 علوم الماء 2',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%85%D8%A7%D8%A1%202.mp4?alt=media&token=5d21839f-fa6a-49f1-ae88-332bfb7769f3'
        },
        {
            'name': 'video20.mp4',
            'videoName': 'الرابع الإبتدائي الفصل الدراسي الأول 1438 علوم تصنيف المخلوقات الحية 1',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%AA%D8%B5%D9%86%D9%8A%D9%81%20%D8%A7%D9%84%D9%85%D8%AE%D9%84%D9%88%D9%82%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A9%201.mp4?alt=media&token=59aece08-9d61-4c8c-80ae-8b160c0a2b85'
        },
        {
            'name': 'video20.mp4',
            'videoName': 'الرابع الإبتدائي الفصل الدراسي الأول 1438 علوم تصنيف المخلوقات الحية 2',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%AA%D8%B5%D9%86%D9%8A%D9%81%20%D8%A7%D9%84%D9%85%D8%AE%D9%84%D9%88%D9%82%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A9%202.mp4?alt=media&token=e003e9d8-0372-4f7e-9299-73f4e77a17bf'
        },
        {
            'name': 'video20.mp4',
            'videoName': 'الرابع الإبتدائي الفصل الدراسي الأول 1438 علوم تصنيف المخلوقات الحية 3',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%AA%D8%B5%D9%86%D9%8A%D9%81%20%D8%A7%D9%84%D9%85%D8%AE%D9%84%D9%88%D9%82%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A9%203.mp4?alt=media&token=f9b319fe-09ce-4ff9-b75c-6b971b099224'
        },
        {
            'name': 'video20.mp4',
            'videoName': 'الرابع الإبتدائي القصل الدراسي الأول علوم الخلايا النباتية والخلايا الحيوانية',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%82%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AE%D9%84%D8%A7%D9%8A%D8%A7%20%D8%A7%D9%84%D9%86%D8%A8%D8%A7%D8%AA%D9%8A%D8%A9%20%D9%88%D8%A7%D9%84%D8%AE%D9%84%D8%A7%D9%8A%D8%A7%20%D8%A7%D9%84%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D9%8A%D8%A9.mp4?alt=media&token=33ba571a-e956-4d6a-ba03-4f0a0cdaa6fc'
        },
        {
            'name': 'video20.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الأول العلوم الجهاز الهيكلي والعضلي والعصبي',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AC%D9%87%D8%A7%D8%B2%20%D8%A7%D9%84%D9%87%D9%8A%D9%83%D9%84%D9%8A%20%D9%88%D8%A7%D9%84%D8%B9%D8%B6%D9%84%D9%8A%20%D9%88%D8%A7%D9%84%D8%B9%D8%B5%D8%A8%D9%8A.mp4?alt=media&token=73c26a3c-acac-4f25-9d9e-d682bc1251f6'
        },
        {
            'name': 'video20.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الأول العلوم المملكة الحيوانية',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%85%D9%85%D9%84%D9%83%D8%A9%20%D8%A7%D9%84%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D9%8A%D8%A9.mp4?alt=media&token=dea21ae2-f504-499c-b35e-da7d035407d3'
        },
        {
            'name': 'video20.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الأول علوم الجهاز التنفسي والدوراني والهضمي',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AC%D9%87%D8%A7%D8%B2%20%D8%A7%D9%84%D8%AA%D9%86%D9%81%D8%B3%D9%8A%20%D9%88%D8%A7%D9%84%D8%AF%D9%88%D8%B1%D8%A7%D9%86%D9%8A%20%D9%88%D8%A7%D9%84%D9%87%D8%B6%D9%85%D9%8A.mp4?alt=media&token=441a0b1e-a7a4-4f9a-9cf7-62556509be7b'
        },
        {
            'name': 'video20.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الأول علوم الخلايا ما المخلوقات الحية؟',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AE%D9%84%D8%A7%D9%8A%D8%A7%20%20%D9%85%D8%A7%20%D8%A7%D9%84%D9%85%D8%AE%D9%84%D9%88%D9%82%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A9%D8%9F.mp4?alt=media&token=0ee4ac3f-d1b7-4a89-b024-b8e7cf6ffdc3'
        },
        {
            'name': 'video20.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الأول علوم الخلايا - كيف تنتظم الخلايا؟',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AE%D9%84%D8%A7%D9%8A%D8%A7%20-%20%D9%83%D9%8A%D9%81%20%D8%AA%D9%86%D8%AA%D8%B8%D9%85%20%D8%A7%D9%84%D8%AE%D9%84%D8%A7%D9%8A%D8%A7%D8%9F.mp4?alt=media&token=8d5d4c0a-b485-4f87-8b79-b6c553eb6a50'
        },
        {
            'name': 'video20.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الأول علوم مقدمة في الأنظمة البيئية ما النظام البيئي',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A3%D9%86%D8%B8%D9%85%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D9%8A%D8%A9%20%D9%85%D8%A7%20%D8%A7%D9%84%D9%86%D8%B8%D8%A7%D9%85%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D9%8A.mp4?alt=media&token=f894cc2d-1106-4ea3-8519-7ee01f398671'
        },
        {
            'name': 'video20.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الأول 1438 علوم أجهزة أجسام الحيوانات (الجهاز الإخراجي)',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A3%D8%AC%D9%87%D8%B2%D8%A9%20%D8%A3%D8%AC%D8%B3%D8%A7%D9%85%20%D8%A7%D9%84%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA%20(%D8%A7%D9%84%D8%AC%D9%87%D8%A7%D8%B2%20%D8%A7%D9%84%D8%A5%D8%AE%D8%B1%D8%A7%D8%AC%D9%8A).mp4?alt=media&token=e56ec0d9-3a14-46b2-a893-8cfba45afaee'
        },
        {
            'name': 'video20.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الأول 1438 علوم أجهزة أجسام الحيوانات (الدم والغازات) 1',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A3%D8%AC%D9%87%D8%B2%D8%A9%20%D8%A3%D8%AC%D8%B3%D8%A7%D9%85%20%D8%A7%D9%84%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA%20(%D8%A7%D9%84%D8%AF%D9%85%20%D9%88%D8%A7%D9%84%D8%BA%D8%A7%D8%B2%D8%A7%D8%AA).mp4?alt=media&token=e427fa05-dc9d-4867-93df-e662ca1e53e4'
        },
        {
            'name': 'video20.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الأول 1438 علوم أجهزة أجسام الحيوانات (الهضم)',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A3%D8%AC%D9%87%D8%B2%D8%A9%20%D8%A3%D8%AC%D8%B3%D8%A7%D9%85%20%D8%A7%D9%84%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA%20(%D8%A7%D9%84%D9%87%D8%B6%D9%85)1.mp4?alt=media&token=91546f0f-b11f-4a45-86e5-1731c8c94988'
        },
        {
            'name': 'video20.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الأول 1438 علوم التغيرات في الأنظمة البيئية 1',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A3%D8%AC%D9%87%D8%B2%D8%A9%20%D8%A3%D8%AC%D8%B3%D8%A7%D9%85%20%D8%A7%D9%84%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA%20(%D8%A7%D9%84%D9%87%D8%B6%D9%85).mp4?alt=media&token=24b33c19-5f11-4120-bd2f-54e3f4a70a4b'
        },
        {
            'name': 'video20.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الأول 1438 علوم التغيرات في الأنظمة البيئية 2',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AA%D8%BA%D9%8A%D8%B1%D8%A7%D8%AA%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A3%D9%86%D8%B8%D9%85%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D9%8A%D8%A9%201.mp4?alt=media&token=df47a4a2-befc-4022-8ad6-d837a8a934a8'
        },
        {
            'name': 'video20.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الأول 1438 علوم العلاقات والأنظمة البيئية 1',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D9%82%D8%A7%D8%AA%20%D9%88%D8%A7%D9%84%D8%A3%D9%86%D8%B8%D9%85%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D9%8A%D8%A9%201.mp4?alt=media&token=17aaaf12-9440-4534-8d89-e07f9a3305cc'
        },
        {
            'name': 'video20.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الأول 1438 علوم العلاقات والأنظمة البيئية 2',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D9%82%D8%A7%D8%AA%20%D9%88%D8%A7%D9%84%D8%A3%D9%86%D8%B8%D9%85%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D9%8A%D8%A9%202.mp4?alt=media&token=3ecf8556-fe3a-49af-8c5f-d25c90e1bf6b'
        },
        {
            'name': 'video20.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الأول 1438 علوم العلاقات والأنظمة البيئية 3',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D9%82%D8%A7%D8%AA%20%D9%88%D8%A7%D9%84%D8%A3%D9%86%D8%B8%D9%85%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D9%8A%D8%A9%203.mp4?alt=media&token=4cd389e4-f6dc-49da-a2c8-83e3d770b4dc'
        },
        {
            'name': 'video20.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الأول 1438 علوم العلاقات والأنظمة البيئية 4',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D9%82%D8%A7%D8%AA%20%D9%88%D8%A7%D9%84%D8%A3%D9%86%D8%B8%D9%85%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D9%8A%D8%A9%204.mp4?alt=media&token=138db478-983b-4dc6-ba12-6e3965dd7670'
        },
        {
            'name': 'video20.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الأول 1438 علوم الماء 1 أين يوجد الماء',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%85%D8%A7%D8%A1%201%20%D8%A3%D9%8A%D9%86%20%D9%8A%D9%88%D8%AC%D8%AF%20%D8%A7%D9%84%D9%85%D8%A7%D8%A1.mp4?alt=media&token=840fac0f-2d8f-4cfe-96d3-489594da003a'
        },
        {
            'name': 'video20.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الأول 1438 علوم الماء',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%85%D8%A7%D8%A1.mp4?alt=media&token=b1e67fba-d7a4-4416-a88a-a4bfc6d27748'
        },
        {
            'name': 'video20.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الأول 1438 علوم المعادن والصخور 1',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D8%AF%D9%86%20%D9%88%D8%A7%D9%84%D8%B5%D8%AE%D9%88%D8%B1%201.mp4?alt=media&token=a4fe537b-6b44-442a-a196-68d2e77fbf93'
        },
        {
            'name': 'video20.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الأول 1438 علوم المعادن والصخور 2',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D8%AF%D9%86%20%D9%88%D8%A7%D9%84%D8%B5%D8%AE%D9%88%D8%B1%202.mp4?alt=media&token=ca040453-20e0-4346-9b68-853ba4013744'
        },
        {
            'name': 'video20.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الأول 1438 علوم مقدمة في الأنظمة البيئية 1',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A3%D9%86%D8%B8%D9%85%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D9%8A%D8%A9%201.mp4?alt=media&token=131e2cd3-454f-4743-af9c-d1af7a63b6e5'
        },
        {
            'name': 'video20.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الأول 1438 علوم مقدمة في الأنظمة البيئية 2',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A3%D9%86%D8%B8%D9%85%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D9%8A%D8%A9%202.mp4?alt=media&token=3ab68d09-b549-4a71-9079-642979b0b130'
        },
        {
            'name': 'video20.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الأول 1438 علوم مقدمة في الأنظمة البيئية',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A3%D9%86%D8%B8%D9%85%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D9%8A%D8%A9.mp4?alt=media&token=2e0383b7-01f1-4735-a8ae-bc6c5274104a'
        },
        {
            'name': 'video20.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الأول علوم مراجعة الفصل الرابع الدورات والتغيرات في الأنظمة البيئية',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%D8%B9%D9%84%D9%88%D9%85%20%D9%85%D8%B1%D8%A7%D8%AC%D8%B9%D8%A9%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%AF%D9%88%D8%B1%D8%A7%D8%AA%20%D9%88%D8%A7%D9%84%D8%AA%D8%BA%D9%8A%D8%B1%D8%A7%D8%AA%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A3%D9%86%D8%B8%D9%85%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D9%8A%D8%A9.mp4?alt=media&token=01e6d381-71b5-45a8-bda4-cc779284ea1e'
        },
    ],
    [
        {
            'name': 'video1.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الثاني علوم مراجعة الةحدة الرابعة الفضاء',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%B1%D8%A7%D8%AC%D8%B9%D8%A9%20%D8%A7%D9%84%D8%A9%D8%AD%D8%AF%D8%A9%20%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%D8%A9%20%20%D8%A7%D9%84%D9%81%D8%B6%D8%A7%D8%A1.mp4?alt=media&token=19b1871f-fabd-425a-a9a1-340ac26bb0c6'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الثاني 1438 علوم الحرارة-2(كيف تنتقل الحرارة؟)',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AD%D8%B1%D8%A7%D8%B1%D8%A9-2(%D9%83%D9%8A%D9%81%20%D8%AA%D9%86%D8%AA%D9%82%D9%84%20%D8%A7%D9%84%D8%AD%D8%B1%D8%A7%D8%B1%D8%A9%D8%9F).mp4?alt=media&token=88ebfd24-0d0b-45d6-bcca-778ac28af76c'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الثاني 1438 علوم المخاليط-2',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D9%85%D8%AE%D8%A7%D9%84%D9%8A%D8%B7-2.mp4?alt=media&token=fa2b40e3-6c97-4a20-8496-00801f6fbf61'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الثاني علوم ما التغيرات الفيزيائية',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%20%D9%85%D8%A7%20%D8%A7%D9%84%D8%AA%D8%BA%D9%8A%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D9%81%D9%8A%D8%B2%D9%8A%D8%A7%D8%A6%D9%8A%D8%A9.mp4?alt=media&token=08229a09-f2b0-44ed-9406-d17d00ba4f2f'
        },
        {
            'name': 'video2.mp4',
            'videoName': ' الرابع الابتدائي الفصل الدراسي الثاني 1438 العلوم الارض والشمس والقمر (1)',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%A7%D8%B1%D8%B6%20%D9%88%D8%A7%D9%84%D8%B4%D9%85%D8%B3%20%D9%88%D8%A7%D9%84%D9%82%D9%85%D8%B1%20(1).mp4?alt=media&token=be5eac35-3b9c-4b2c-a289-51fd3ebb63e6'
        },
        {
            'name': 'video3.mp4',
            'videoName': ' الرابع الابتدائي الفصل الدراسي الثاني 1438 العلوم النظام الشمسي',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%86%D8%B8%D8%A7%D9%85%20%D8%A7%D9%84%D8%B4%D9%85%D8%B3%D9%8A.mp4?alt=media&token=7127603b-e5eb-466b-bed3-ee1dabf169cd'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الثاني 1438 العلوم (كيف يبدو القمر)',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%20(%D9%83%D9%8A%D9%81%20%D9%8A%D8%A8%D8%AF%D9%88%20%D8%A7%D9%84%D9%82%D9%85%D8%B1).mp4?alt=media&token=9597d22b-326e-4c5d-b92e-5ab61cf62b17'
        },
        {
            'name': 'video2.mp4',
            'videoName': ' الرابع الابتدائي الفصل الدراسي الثاني 1438 العلوم الارض والشمس والقمر(2)',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%A7%D8%B1%D8%B6%20%D9%88%D8%A7%D9%84%D8%B4%D9%85%D8%B3%20%D9%88%D8%A7%D9%84%D9%82%D9%85%D8%B1(2).mp4?alt=media&token=cf64d5d0-8067-45f7-ad1a-7153879aee1f'
        },
        {
            'name': 'video3.mp4',
            'videoName': ' الرابع الابتدائي الفصل الدراسي الثاني علوم كيف تتغير حالة المادة',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%20%D9%83%D9%8A%D9%81%20%D8%AA%D8%AA%D8%BA%D9%8A%D8%B1%20%D8%AD%D8%A7%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%A7%D8%AF%D8%A9.mp4?alt=media&token=d72867a4-c158-466f-8b98-a9a330b756a1'
        },
        {
            'name': 'video1.mp4',
            'videoName': ' الرابع الابتدائي الفصل الدراسي الثاني علوم ما المقصود بالتغيرات الكيميائية',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%20%D9%85%D8%A7%20%D8%A7%D9%84%D9%85%D9%82%D8%B5%D9%88%D8%AF%20%D8%A8%D8%A7%D9%84%D8%AA%D8%BA%D9%8A%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D9%83%D9%8A%D9%85%D9%8A%D8%A7%D8%A6%D9%8A%D8%A9.mp4?alt=media&token=85b05114-9094-4fb8-ae83-9062bad73a58'
        },
        {
            'name': 'video2.mp4',
            'videoName': ' الرابع الابتدائي الفصل الدراسي الثاني علوم الارض والشمس والقمر ما الخسوف؟ وما الكسوف',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%A7%D8%B1%D8%B6%20%D9%88%D8%A7%D9%84%D8%B4%D9%85%D8%B3%20%D9%88%D8%A7%D9%84%D9%82%D9%85%D8%B1%20%20%D9%85%D8%A7%20%D8%A7%D9%84%D8%AE%D8%B3%D9%88%D9%81%D8%9F%20%D9%88%D9%85%D8%A7%20%D8%A7%D9%84%D9%83%D8%B3%D9%88%D9%81.mp4?alt=media&token=550a2433-858d-4991-9252-edab7edfbbf2'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الثاني علوم الارض والشمس والقمر ما الخسوف؟وما الكسوف؟',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%A7%D8%B1%D8%B6%20%D9%88%D8%A7%D9%84%D8%B4%D9%85%D8%B3%20%D9%88%D8%A7%D9%84%D9%82%D9%85%D8%B1%20%20%D9%85%D8%A7%20%D8%A7%D9%84%D8%AE%D8%B3%D9%88%D9%81%D8%9F%D9%88%D9%85%D8%A7%20%D8%A7%D9%84%D9%83%D8%B3%D9%88%D9%81%D8%9F.mp4?alt=media&token=ac9ce0ab-0ccc-4839-b949-186518441fb4'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الثاني علوم التسارع - القصور الذاتي - الاحتكاك',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AA%D8%B3%D8%A7%D8%B1%D8%B9%20-%20%D8%A7%D9%84%D9%82%D8%B5%D9%88%D8%B1%20%D8%A7%D9%84%D8%B0%D8%A7%D8%AA%D9%8A%20-%20%D8%A7%D9%84%D8%A7%D8%AD%D8%AA%D9%83%D8%A7%D9%83.mp4?alt=media&token=cd99bf40-972d-42d7-834f-340df0e0f0c0'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الثاني علوم الحرارة ما الحرارة؟',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AD%D8%B1%D8%A7%D8%B1%D8%A9%20%20%D9%85%D8%A7%20%D8%A7%D9%84%D8%AD%D8%B1%D8%A7%D8%B1%D8%A9%D8%9F.mp4?alt=media&token=3276a7d3-32b6-4d9c-9deb-7a633af2c2d5'
        },
        {
            'name': 'video3.mp4',
            'videoName': ' الرابع الابتدائي الفصل الدراسي الثاني علوم القياس ما الوزن',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%82%D9%8A%D8%A7%D8%B3%20%20%20%D9%85%D8%A7%20%D8%A7%D9%84%D9%88%D8%B2%D9%86.mp4?alt=media&token=1fc18b8b-887f-4c53-935a-e8df8f5f7709'
        },
        {
            'name': 'video1.mp4',
            'videoName': ' الرابع الابتدائي الفصل الدراسي الثاني علوم الكهرباء (الدوائر الكهربائية)',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A1%20(%D8%A7%D9%84%D8%AF%D9%88%D8%A7%D8%A6%D8%B1%20%D8%A7%D9%84%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A6%D9%8A%D8%A9).mp4?alt=media&token=f56b6d94-a18b-4a8d-89c9-1707307cc0a1'
        },
        {
            'name': 'video2.mp4',
            'videoName': ' الرابع الابتدائي الفصل الدراسي الثاني علوم الكهرباء - دوائر التوالي والتوازي',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A1%20-%20%D8%AF%D9%88%D8%A7%D8%A6%D8%B1%20%D8%A7%D9%84%D8%AA%D9%88%D8%A7%D9%84%D9%8A%20%D9%88%D8%A7%D9%84%D8%AA%D9%88%D8%A7%D8%B2%D9%8A.mp4?alt=media&token=432b6f22-8505-4de2-8e90-3ddbc3c90881'
        },
        {
            'name': 'video3.mp4',
            'videoName': ' الرابع الابتدائي الفصل الدراسي الثاني علوم المخاليط (كيف تفصل مكونات المخلوط)',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%85%D8%AE%D8%A7%D9%84%D9%8A%D8%B7%20(%D9%83%D9%8A%D9%81%20%D8%AA%D9%81%D8%B5%D9%84%20%D9%85%D9%83%D9%88%D9%86%D8%A7%D8%AA%20%D8%A7%D9%84%D9%85%D8%AE%D9%84%D9%88%D8%B7).mp4?alt=media&token=9148922e-d36a-4bbc-8727-a1e21d6c2905'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الثاني علوم المخاليط (كيف يمكننا فصل أجزاء المحاليل)',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%85%D8%AE%D8%A7%D9%84%D9%8A%D8%B7%20(%D9%83%D9%8A%D9%81%20%D9%8A%D9%85%D9%83%D9%86%D9%86%D8%A7%20%D9%81%D8%B5%D9%84%20%D8%A3%D8%AC%D8%B2%D8%A7%D8%A1%20%D8%A7%D9%84%D9%85%D8%AD%D8%A7%D9%84%D9%8A%D9%84).mp4?alt=media&token=7fa882af-659c-4de1-aaad-e893fdb4325c'
        },
        {
            'name': 'video2.mp4',
            'videoName': ' الرابع الابتدائي الفصل الدراسي الثاني علوم المخاليط (ما المخلوط)',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%85%D8%AE%D8%A7%D9%84%D9%8A%D8%B7%20(%D9%85%D8%A7%20%D8%A7%D9%84%D9%85%D8%AE%D9%84%D9%88%D8%B7).mp4?alt=media&token=6ea8a8b2-b975-4318-91a9-9f773e4e3957'
        },
        {
            'name': 'video3.mp4',
            'videoName': ' الرابع الابتدائي الفصل الدراسي الثاني علوم المغناطيسية (2)',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%85%D8%BA%D9%86%D8%A7%D8%B7%D9%8A%D8%B3%D9%8A%D8%A9%20(2).mp4?alt=media&token=b4d0dc09-80bb-4bf7-8e92-813548e5f574'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الثاني علوم المغناطيسية',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%85%D8%BA%D9%86%D8%A7%D8%B7%D9%8A%D8%B3%D9%8A%D8%A9.mp4?alt=media&token=5bdaa749-212b-46d5-b5d3-3d3123e16bd3'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الثاني علوم المولد الكهربائي والمغناطيس الكهربائي',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%85%D9%88%D9%84%D8%AF%20%D8%A7%D9%84%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A6%D9%8A%20%D9%88%D8%A7%D9%84%D9%85%D8%BA%D9%86%D8%A7%D8%B7%D9%8A%D8%B3%20%D8%A7%D9%84%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A6%D9%8A.mp4?alt=media&token=f0d722bd-987c-4515-88a3-0099e922d300'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الثاني علوم تغير الحركة كيف تؤثر القوى في الحركة؟',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%AA%D8%BA%D9%8A%D8%B1%20%D8%A7%D9%84%D8%AD%D8%B1%D9%83%D8%A9%20%20%D9%83%D9%8A%D9%81%20%D8%AA%D8%A4%D8%AB%D8%B1%20%D8%A7%D9%84%D9%82%D9%88%D9%89%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%AD%D8%B1%D9%83%D8%A9%D8%9F.mp4?alt=media&token=c744604c-7727-4818-9f71-d6ac1be9fddf'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الثاني علوم حل أسئلة الكتاب ص 102 - 105',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%AD%D9%84%20%D8%A3%D8%B3%D8%A6%D9%84%D8%A9%20%D8%A7%D9%84%D9%83%D8%AA%D8%A7%D8%A8%20%D8%B5%20102%20-%20105.mp4?alt=media&token=d254403d-2565-4c70-87ec-1376419afb47'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الثاني علوم حل أسئلة الكتاب صفحة 142-145',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%AD%D9%84%20%D8%A3%D8%B3%D8%A6%D9%84%D8%A9%20%D8%A7%D9%84%D9%83%D8%AA%D8%A7%D8%A8%20%D8%B5%D9%81%D8%AD%D8%A9%20142-145.mp4?alt=media&token=198fec7a-0063-4b0b-a7fc-79760908ad8e'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الثاني علوم حل اسئلة الكتاب صفحة 75 - 78',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%AD%D9%84%20%D8%A7%D8%B3%D8%A6%D9%84%D8%A9%20%D8%A7%D9%84%D9%83%D8%AA%D8%A7%D8%A8%20%D8%B5%D9%81%D8%AD%D8%A9%2075%20-%2078.mp4?alt=media&token=4bb6d183-e605-4ba7-b9cd-60546461d5b7'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الثاني علوم حل الأسئلة صفحة 139 - 143',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%AD%D9%84%20%D8%A7%D9%84%D8%A3%D8%B3%D8%A6%D9%84%D8%A9%20%D8%B5%D9%81%D8%AD%D8%A9%20139%20-%20143.mp4?alt=media&token=d8e21911-428a-4906-bad3-68c482530c95'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الثاني علوم حل بعض أسئلة الكتاب صفحة 99-103',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%AD%D9%84%20%D8%A8%D8%B9%D8%B6%20%D8%A3%D8%B3%D8%A6%D9%84%D8%A9%20%D8%A7%D9%84%D9%83%D8%AA%D8%A7%D8%A8%20%D8%B5%D9%81%D8%AD%D8%A9%2099-103.mp4?alt=media&token=0a68bb94-084d-425a-8346-4d60d97d03ac'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الثاني علوم كيف تصنف الكواكب؟ وما اهمية الشمس',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%83%D9%8A%D9%81%20%D8%AA%D8%B5%D9%86%D9%81%20%D8%A7%D9%84%D9%83%D9%88%D8%A7%D9%83%D8%A8%D8%9F%20%D9%88%D9%85%D8%A7%20%D8%A7%D9%87%D9%85%D9%8A%D8%A9%20%D8%A7%D9%84%D8%B4%D9%85%D8%B3.mp4?alt=media&token=754e28b9-c824-4c99-9f58-48877847e91a'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الثاني علوم ما النظام الشمسي؟ وكيف ندرسه؟',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%A7%20%D8%A7%D9%84%D9%86%D8%B8%D8%A7%D9%85%20%D8%A7%D9%84%D8%B4%D9%85%D8%B3%D9%8A%D8%9F%20%D9%88%D9%83%D9%8A%D9%81%20%D9%86%D8%AF%D8%B1%D8%B3%D9%87%D8%9F.mp4?alt=media&token=de55316a-ea1d-4ef3-8d5a-4eb9f0dc5eef'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الثاني 1438 العلوم القياس1',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%82%D9%8A%D8%A7%D8%B31.mp4?alt=media&token=190cb5b7-b562-4a3d-ae41-37769154ba06'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الثاني 1438 العلوم القياس (1) كيف نقيس المادة',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D9%82%D9%8A%D8%A7%D8%B3%20(1)%20%D9%83%D9%8A%D9%81%20%D9%86%D9%82%D9%8A%D8%B3%20%D8%A7%D9%84%D9%85%D8%A7%D8%AF%D8%A9.mp4?alt=media&token=ac2c3bc3-4b93-4f9f-8f97-6dbb2540feb8'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الثاني 1438 علوم الأرض والشمس والقمر 1',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%A3%D8%B1%D8%B6%20%D9%88%D8%A7%D9%84%D8%B4%D9%85%D8%B3%20%D9%88%D8%A7%D9%84%D9%82%D9%85%D8%B1%201.mp4?alt=media&token=1c6dab35-1af9-46ad-a5fc-0a17cda45daa'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الثاني 1438 علوم الكهرباء -3',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A1%20-3.mp4?alt=media&token=a58c910e-769a-44a0-bf24-3fbc75907838'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الثاني 1438 علوم الكهرباء-1(ماالشحنة الكهربائية؟)',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A1-1(%D9%85%D8%A7%D8%A7%D9%84%D8%B4%D8%AD%D9%86%D8%A9%20%D8%A7%D9%84%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A6%D9%8A%D8%A9%D8%9F).mp4?alt=media&token=2e2ec358-b4b6-4220-976e-221b395389fe'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الثاني 1438 علوم الكهرباء-2(كيف تتحرك الشحنات الكهربائية؟)',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A1-2(%D9%83%D9%8A%D9%81%20%D8%AA%D8%AA%D8%AD%D8%B1%D9%83%20%D8%A7%D9%84%D8%B4%D8%AD%D9%86%D8%A7%D8%AA%20%D8%A7%D9%84%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A6%D9%8A%D8%A9%D8%9F).mp4?alt=media&token=cf03d2ff-1ce5-4064-8a59-54629ec5e2f4'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الثاني 1438 علوم المغناطيسية-1(ماالمغناطيس؟)',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%85%D8%BA%D9%86%D8%A7%D8%B7%D9%8A%D8%B3%D9%8A%D8%A9-1(%D9%85%D8%A7%D8%A7%D9%84%D9%85%D8%BA%D9%86%D8%A7%D8%B7%D9%8A%D8%B3%D8%9F).mp4?alt=media&token=e829b6b4-1b1b-49e8-a554-721954769303'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الثاني 1438 علوم النظام الشمسي -1',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%86%D8%B8%D8%A7%D9%85%20%D8%A7%D9%84%D8%B4%D9%85%D8%B3%D9%8A%20-1.mp4?alt=media&token=62dc417e-209f-4763-894e-a7c950519d4a'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الثاني 1438 علوم النظام الشمسي -2',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%86%D8%B8%D8%A7%D9%85%20%D8%A7%D9%84%D8%B4%D9%85%D8%B3%D9%8A%20-2.mp4?alt=media&token=4246880e-d9e8-487a-8a2a-dd93e3d03a90'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الثاني 1438 علوم تغير الحركة-2',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%AA%D8%BA%D9%8A%D8%B1%20%D8%A7%D9%84%D8%AD%D8%B1%D9%83%D8%A9-2.mp4?alt=media&token=9dcf7ac6-7232-4259-be8c-8279db397560'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الثاني 1438 علوم تغير الحركة  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%AA%D8%BA%D9%8A%D8%B1%20%D8%A7%D9%84%D8%AD%D8%B1%D9%83%D8%A9.mp4?alt=media&token=a211f014-0360-4f0b-bdd8-3624afb8fc5e'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الثاني 1438 علوم كيف تتغير المادة-1  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%83%D9%8A%D9%81%20%D8%AA%D8%AA%D8%BA%D9%8A%D8%B1%20%D8%A7%D9%84%D9%85%D8%A7%D8%AF%D8%A9-1.mp4?alt=media&token=6040e929-2fec-4153-b201-d37fde958366'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الثاني 1438 علوم القياس-2(ماالكثافة؟ -الوزن؟)  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%82%D9%8A%D8%A7%D8%B3-2(%D9%85%D8%A7%D8%A7%D9%84%D9%83%D8%AB%D8%A7%D9%81%D8%A9%D8%9F%20-%D8%A7%D9%84%D9%88%D8%B2%D9%86%D8%9F).mp4?alt=media&token=05ba2976-2568-44cc-95da-257ccdee7e54'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الثاني 1438علوم كيف تتغير المادة-3 ماالمقصود بالتغيرات الكيميائية؟  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%D8%B9%D9%84%D9%88%D9%85%20%D9%83%D9%8A%D9%81%20%D8%AA%D8%AA%D8%BA%D9%8A%D8%B1%20%D8%A7%D9%84%D9%85%D8%A7%D8%AF%D8%A9-3%20%D9%85%D8%A7%D8%A7%D9%84%D9%85%D9%82%D8%B5%D9%88%D8%AF%20%D8%A8%D8%A7%D9%84%D8%AA%D8%BA%D9%8A%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D9%83%D9%8A%D9%85%D9%8A%D8%A7%D8%A6%D9%8A%D8%A9%D8%9F.mp4?alt=media&token=67183459-fae1-4079-a31d-8fb289d92db5'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الثاني علوم الارض والشمس والقمر كيف يبدو القمر واطواره؟  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%A7%D8%B1%D8%B6%20%D9%88%D8%A7%D9%84%D8%B4%D9%85%D8%B3%20%D9%88%D8%A7%D9%84%D9%82%D9%85%D8%B1%20%20%D9%83%D9%8A%D9%81%20%D9%8A%D8%A8%D8%AF%D9%88%20%D8%A7%D9%84%D9%82%D9%85%D8%B1%20%D9%88%D8%A7%D8%B7%D9%88%D8%A7%D8%B1%D9%87%D8%9F.mp4?alt=media&token=42f28015-5d2d-432b-9d71-01994c5259d8'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الثاني علوم القياس كيف تقيس المادة؟  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%82%D9%8A%D8%A7%D8%B3%20%20%20%D9%83%D9%8A%D9%81%20%D8%AA%D9%82%D9%8A%D8%B3%20%D8%A7%D9%84%D9%85%D8%A7%D8%AF%D8%A9%D8%9F.mp4?alt=media&token=08a2d46f-5a85-42b0-91de-654710226cd2'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الثاني علوم القياس ما الكثافة  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%82%D9%8A%D8%A7%D8%B3%20%20%20%D9%85%D8%A7%20%D8%A7%D9%84%D9%83%D8%AB%D8%A7%D9%81%D8%A9.mp4?alt=media&token=43cb033a-2e85-486c-a5c8-5ca11bdd4489'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الثاني علوم ما سبب حدوث الليل والنهار والفصول الاربعة  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%A7%20%D8%B3%D8%A8%D8%A8%20%D8%AD%D8%AF%D9%88%D8%AB%20%D8%A7%D9%84%D9%84%D9%8A%D9%84%20%D9%88%D8%A7%D9%84%D9%86%D9%87%D8%A7%D8%B1%20%D9%88%D8%A7%D9%84%D9%81%D8%B5%D9%88%D9%84%20%D8%A7%D9%84%D8%A7%D8%B1%D8%A8%D8%B9%D8%A9.mp4?alt=media&token=a4d5c3f1-ebf0-4db8-9346-a25bf2ce8d19'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'الرابع الابتدائي الفصل الدراسي الثاني 1438 علوم المخاليط-1  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D9%85%D8%AE%D8%A7%D9%84%D9%8A%D8%B7-1.mp4?alt=media&token=f9f89298-89a8-4d9f-84da-c4eaa116a6d5'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الرابعة الابتدائي الفصل الدراسي الثاني 1438 علوم القياس -1  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%D8%A9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%82%D9%8A%D8%A7%D8%B3%20-1.mp4?alt=media&token=01ccbd8a-7baf-4727-8245-f16b90d56d70'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'الرابعة الابتدائي الفصل الدراسي الثاني 1438 علوم النظام الشمسي -2  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%D8%A9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%86%D8%B8%D8%A7%D9%85%20%D8%A7%D9%84%D8%B4%D9%85%D8%B3%D9%8A%20-2.mp4?alt=media&token=a34b5ce1-f198-423c-bb06-45e50e101401'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'الرابعة الابتدائي الفصل الدراسي الثاني 1438 علوم النظام الشمسي -3  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%D8%A9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%86%D8%B8%D8%A7%D9%85%20%D8%A7%D9%84%D8%B4%D9%85%D8%B3%D9%8A%20-3.mp4?alt=media&token=3de79689-8ab0-4015-8173-ca79e5519d56'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'رابع ابتدائي الفصل الدراسي الثاني 1438 علوم المغناطيسية- مالمجال المغناطيسي؟  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%85%D8%BA%D9%86%D8%A7%D8%B7%D9%8A%D8%B3%D9%8A%D8%A9-%20%D9%85%D8%A7%D9%84%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D9%85%D8%BA%D9%86%D8%A7%D8%B7%D9%8A%D8%B3%D9%8A%D8%9F.mp4?alt=media&token=87f6d4a2-8a6f-4557-884c-45e2eb8bc227'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'رابع ابتدائي الفصل الدراسي الثاني 1438 علوم المغناطيسية  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%85%D8%BA%D9%86%D8%A7%D8%B7%D9%8A%D8%B3%D9%8A%D8%A9.mp4?alt=media&token=aab63472-c8d7-476b-ab7f-8a476e8e317f'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'رابع ابتدائي الفصل الدراسي الثاني 1438 علوم قياس المادة وتغيرها  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%D9%82%D9%8A%D8%A7%D8%B3%20%D8%A7%D9%84%D9%85%D8%A7%D8%AF%D8%A9%20%D9%88%D8%AA%D8%BA%D9%8A%D8%B1%D9%87%D8%A7.mp4?alt=media&token=d4cdadb7-afa7-4b28-bebc-ebbbde330982'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'رابع ابتدائي الفصل الدراسي الثاني 1438 علوم الحرارة 2  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AD%D8%B1%D8%A7%D8%B1%D8%A9%202.mp4?alt=media&token=998cac76-e511-4091-b70c-2d4ce9cc6965'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'رابع ابتدائي الفصل الدراسي الثاني 1438 علوم النظام الشمسي والفضاء  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/4-2%2F%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%86%D8%B8%D8%A7%D9%85%20%D8%A7%D9%84%D8%B4%D9%85%D8%B3%D9%8A%20%D9%88%D8%A7%D9%84%D9%81%D8%B6%D8%A7%D8%A1.mp4?alt=media&token=dddd6585-b78a-4dd0-aec9-8dfc56316e32'
        },
    ],
    [
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الإبتدائي الفصل الدراسي الأول علوم التفاعلات في الأنظمة البيئية            ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AA%D9%81%D8%A7%D8%B9%D9%84%D8%A7%D8%AA%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A3%D9%86%D8%B8%D9%85%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D9%8A%D8%A9.mp4?alt=media&token=75cf6609-a637-4a5f-8e52-a6f144e9b9bc'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الإبتدائي الفصل الدراسي الأول علوم التكاثر          ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AA%D9%83%D8%A7%D8%AB%D8%B1.mp4?alt=media&token=d2fa22c3-fd9d-40f9-a150-ea85a20f3862'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الإبتدائي الفصل الدراسي الأول علوم العلاقات في الأنظمة البيئية        ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D9%82%D8%A7%D8%AA%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A3%D9%86%D8%B8%D9%85%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D9%8A%D8%A9.mp4?alt=media&token=6346acfd-36eb-4df5-b1e0-20d62cddd2a7'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الإبتدائي الفصل الدراسي الأول علوم النباتات      ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA.mp4?alt=media&token=5277717f-881e-4923-818c-0ba2c3981f23'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الإبتدائي الفصل الدراسي الأول علوم مراجعة الفصل الأول وحل التمارين    ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%B1%D8%A7%D8%AC%D8%B9%D8%A9%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%D9%88%D8%AD%D9%84%20%D8%A7%D9%84%D8%AA%D9%85%D8%A7%D8%B1%D9%8A%D9%86.mp4?alt=media&token=fb171320-ceca-4ed3-a08b-79b7cbe41179'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الإبتدائي الفصل الدراسي الأول علوم مراجعة الفصل الثالث التفاعلات في الأنظمة البيئية  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%B1%D8%A7%D8%AC%D8%B9%D8%A9%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%AA%D9%81%D8%A7%D8%B9%D9%84%D8%A7%D8%AA%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A3%D9%86%D8%B8%D9%85%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D9%8A%D8%A9.mp4?alt=media&token=76d82eac-e554-4a07-92c9-6a3ce6a8a202'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الإبتدائي الفصل الدراسي الأول علوم مرجعة الفصل الثاني الآباء والابناء  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%B1%D8%AC%D8%B9%D8%A9%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%A2%D8%A8%D8%A7%D8%A1%20%D9%88%D8%A7%D9%84%D8%A7%D8%A8%D9%86%D8%A7%D8%A1.mp4?alt=media&token=ded1c1a8-3042-4862-91dd-c1a3fe0a0a9e'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الإبتدائي الفصل الدراسي الأول 1438 علوم العمليات المؤثرة في سطح الأرض 1',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA%20%D8%A7%D9%84%D9%85%D8%A4%D8%AB%D8%B1%D8%A9%20%D9%81%D9%8A%20%D8%B3%D8%B7%D8%AD%20%D8%A7%D9%84%D8%A3%D8%B1%D8%B6%201.mp4?alt=media&token=173cc13a-46aa-4b14-b30e-8a6014e6f43e'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الإبتدائي الفصل الدراسي الأول 1438 علوم العمليات المؤثرة في سطح الأرض 2',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA%20%D8%A7%D9%84%D9%85%D8%A4%D8%AB%D8%B1%D8%A9%20%D9%81%D9%8A%20%D8%B3%D8%B7%D8%AD%20%D8%A7%D9%84%D8%A3%D8%B1%D8%B6%202.mp4?alt=media&token=a2ccc66b-5587-43c8-afb1-157f7b79c68d'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الإبتدائي الفصل الدراسي الأول 1438 علوم النباتات 1  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA%201.mp4?alt=media&token=1cf6b551-3aa1-4326-98b2-1228d7ec8276'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الإبتدائي الفصل الدراسي الأول 1438 علوم النباتات 2',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA%202.mp4?alt=media&token=fcb426a0-a8c9-408a-9583-97d01bb3200a'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الإبتدائي الفصل الدراسي الأول 1438 علوم الهواء والماء 1',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%87%D9%88%D8%A7%D8%A1%20%D9%88%D8%A7%D9%84%D9%85%D8%A7%D8%A1%201.mp4?alt=media&token=7a6013ba-3057-4bcf-af75-44252a98f24b'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الإبتدائي الفصل الدراسي الأول 1438 علوم الهواء والماء 2  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%87%D9%88%D8%A7%D8%A1%20%D9%88%D8%A7%D9%84%D9%85%D8%A7%D8%A1%202.mp4?alt=media&token=844e8c00-9089-48a9-b2bc-bcfd872a8696'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الإبتدائي الفصل الدراسي الأول 1438 علوم تصنيف المخلوقات الحية 1',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%AA%D8%B5%D9%86%D9%8A%D9%81%20%D8%A7%D9%84%D9%85%D8%AE%D9%84%D9%88%D9%82%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A9%201.mp4?alt=media&token=3148d7f4-f6d2-4523-a29b-5b2b80bc3355'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الإبتدائي الفصل الدراسي الأول 1438 علوم تصنيف المخلوقات الحية 2',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%AA%D8%B5%D9%86%D9%8A%D9%81%20%D8%A7%D9%84%D9%85%D8%AE%D9%84%D9%88%D9%82%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A9%202.mp4?alt=media&token=edbdf755-276c-45b0-98ca-3e237a0771f9'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الإبتدائي الفصل الدراسي الاول علوم الآباء والأبناء  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A7%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%A2%D8%A8%D8%A7%D8%A1%20%D9%88%D8%A7%D9%84%D8%A3%D8%A8%D9%86%D8%A7%D8%A1.mp4?alt=media&token=ddc55cdf-7408-4f86-949e-879c5d719323'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الابتدائي الفصل الأول المتوسط الدراسي الثاني 1438 العلوم المناخ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%85%D9%86%D8%A7%D8%AE.mp4?alt=media&token=f070075c-9eb7-40d1-84bb-2294d6e4f1fa'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدارسي الأول علوم مراجعة الأباء والأبناء',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%A7%D8%B1%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%B1%D8%A7%D8%AC%D8%B9%D8%A9%20%20%D8%A7%D9%84%D8%A3%D8%A8%D8%A7%D8%A1%20%D9%88%D8%A7%D9%84%D8%A3%D8%A8%D9%86%D8%A7%D8%A1.mp4?alt=media&token=ab04c68c-1fec-464e-90fa-251f58e43723'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدارسي الأول علوم ممالك المخلوقات الحية  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%A7%D8%B1%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D9%85%D8%A7%D9%84%D9%83%20%D8%A7%D9%84%D9%85%D8%AE%D9%84%D9%88%D9%82%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A9.mp4?alt=media&token=e0599d68-b5b0-4812-9121-4b5af1cf8b47'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الأول علوم التصنيف',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AA%D8%B5%D9%86%D9%8A%D9%81.mp4?alt=media&token=57e1f6fd-0f05-4200-af28-3cb436977160'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الأول علوم الدورات في الأنظمة البيئية',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AF%D9%88%D8%B1%D8%A7%D8%AA%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A3%D9%86%D8%B8%D9%85%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D9%8A%D8%A9.mp4?alt=media&token=de5e3306-4aa0-4ca2-b2cc-74f401f7c885'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الأول علوم النباتات  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA.mp4?alt=media&token=8a71fc5c-d6b4-470c-b1ab-82b88e2039a0'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الأول 1438 علوم التغيرات في الأنظمة البيئية',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AA%D8%BA%D9%8A%D8%B1%D8%A7%D8%AA%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A3%D9%86%D8%B8%D9%85%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D9%8A%D8%A9.mp4?alt=media&token=46891019-5929-4727-8d79-c6c00fc8a445'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الأول 1438 علوم التكيف والبقاء (مابعض تكيفات الحيوانات)',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AA%D9%83%D9%8A%D9%81%20%D9%88%D8%A7%D9%84%D8%A8%D9%82%D8%A7%D8%A1%20(%D9%85%D8%A7%D8%A8%D8%B9%D8%B6%20%D8%AA%D9%83%D9%8A%D9%81%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA).mp4?alt=media&token=802ba2f0-5db3-478c-bb35-6a66cb149672'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الأول 1438 علوم التكيف والبقاء (مابعض تكيفات النباتات)  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AA%D9%83%D9%8A%D9%81%20%D9%88%D8%A7%D9%84%D8%A8%D9%82%D8%A7%D8%A1%20(%D9%85%D8%A7%D8%A8%D8%B9%D8%B6%20%D8%AA%D9%83%D9%8A%D9%81%D8%A7%D8%AA%20%D8%A7%D9%84%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA).mp4?alt=media&token=84485f94-588d-4442-b17c-fdefe0e89498'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الأول 1438 علوم الدورات في الأنظمة البيئية 1',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AF%D9%88%D8%B1%D8%A7%D8%AA%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A3%D9%86%D8%B8%D9%85%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D9%8A%D8%A9%201.mp4?alt=media&token=6a2258ff-7dca-489c-a164-4ca03477c726'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الأول 1438 علوم الدورات في الأنظمة البيئية 2',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AF%D9%88%D8%B1%D8%A7%D8%AA%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A3%D9%86%D8%B8%D9%85%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D9%8A%D8%A9%202.mp4?alt=media&token=86d8e149-43ae-4fd3-8c2b-bb37cafc6e00'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الأول 1438 علوم الدورات في الأنظمة البيئية 3  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AF%D9%88%D8%B1%D8%A7%D8%AA%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A3%D9%86%D8%B8%D9%85%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D9%8A%D8%A9%203.mp4?alt=media&token=966dbd5a-9d1f-42fc-9315-f5c9163a01ec'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الأول 1438 علوم الدورات في الأنظمة البيئية 4',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AF%D9%88%D8%B1%D8%A7%D8%AA%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A3%D9%86%D8%B8%D9%85%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D9%8A%D8%A9%204.mp4?alt=media&token=94f18322-825a-4a93-a2fb-e2e01cc41f2b'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الأول 1438 علوم العلاقات في الأنظمة البيئية 1',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D9%82%D8%A7%D8%AA%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A3%D9%86%D8%B8%D9%85%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D9%8A%D8%A9%201.mp4?alt=media&token=beb286b1-ff1f-4f45-9781-96b88b496d3d'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الأول 1438 علوم العلاقات في الأنظمة البيئية 2  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D9%82%D8%A7%D8%AA%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A3%D9%86%D8%B8%D9%85%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D9%8A%D8%A9%202.mp4?alt=media&token=bc18fc71-d6e6-42ab-970a-4daf81afff43'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الأول 1438 علوم العلاقات في الأنظمة البيئية 3',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D9%82%D8%A7%D8%AA%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A3%D9%86%D8%B8%D9%85%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D9%8A%D8%A9%203.mp4?alt=media&token=d0408785-c69b-4667-9e89-466a48e65972'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الأول 1438 علوم العلاقات في الأنظمة البيئية',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D9%82%D8%A7%D8%AA%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A3%D9%86%D8%B8%D9%85%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D9%8A%D8%A9.mp4?alt=media&token=f050026d-f437-4118-bd02-f88a79b78d0a'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الأول 1438 علوم دورات الحياة (الاخصاب الخارجي)   ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%AF%D9%88%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A7%D8%A9%20(%D8%A7%D9%84%D8%A7%D8%AE%D8%B5%D8%A7%D8%A8%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B1%D8%AC%D9%8A).mp4?alt=media&token=12d1440d-7672-4685-845a-3899fa5a4e0a'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الأول 1438 علوم دورات الحياة (النبات الزهري)',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%AF%D9%88%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A7%D8%A9%20(%D8%A7%D9%84%D9%86%D8%A8%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B2%D9%87%D8%B1%D9%8A).mp4?alt=media&token=a39d4b71-d47e-448f-b87e-8dbf04c41fe4'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الأول 1438 علوم معالم سطح الأرض 1',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%B9%D8%A7%D9%84%D9%85%20%D8%B3%D8%B7%D8%AD%20%D8%A7%D9%84%D8%A3%D8%B1%D8%B6%201.mp4?alt=media&token=2ee60ccb-49ff-4f83-b0c6-8b3d1ce038e3'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الأول 1438 علوم معالم سطح الأرض 2  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%B9%D8%A7%D9%84%D9%85%20%D8%B3%D8%B7%D8%AD%20%D8%A7%D9%84%D8%A3%D8%B1%D8%B6%202.mp4?alt=media&token=da2bc88d-c07e-419e-aa53-0412579612d4'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'خامس الابتدائي الفصل الأول المتوسط الدراسي الثاني 1438 العلوم الغيوم والهطول',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5%2F%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%BA%D9%8A%D9%88%D9%85%20%D9%88%D8%A7%D9%84%D9%87%D8%B7%D9%88%D9%84.mp4?alt=media&token=494358b0-d87d-42f5-9463-8de506da3408'
        },
    ],
    [
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الإبتدائي الفصل الدراسي الثاني 1438 علوم العواصف 1  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B9%D9%88%D8%A7%D8%B5%D9%81%201.mp4?alt=media&token=1dfc62d7-823d-49eb-af97-235cdc8a85db'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني علوم الآلات البسيطة            ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%A2%D9%84%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A8%D8%B3%D9%8A%D8%B7%D8%A9.mp4?alt=media&token=5aa888ca-daf6-4c8e-88bb-4c5c58820fb0'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني علوم التغيرات الفيزيائية            ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AA%D8%BA%D9%8A%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D9%81%D9%8A%D8%B2%D9%8A%D8%A7%D8%A6%D9%8A%D8%A9.mp4?alt=media&token=680d5a0e-ba17-49a9-9fab-d04ca8b19e35'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني علوم التغيرات الكيميائية - ما المركبات؟          ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AA%D8%BA%D9%8A%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D9%83%D9%8A%D9%85%D9%8A%D8%A7%D8%A6%D9%8A%D8%A9%20-%20%D9%85%D8%A7%20%D8%A7%D9%84%D9%85%D8%B1%D9%83%D8%A8%D8%A7%D8%AA%D8%9F.mp4?alt=media&token=16bdb1cf-7a9e-4114-9e91-c30297e2f3f5'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني علوم الروافع - آلات تشبه الروافع          ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B1%D9%88%D8%A7%D9%81%D8%B9%20-%20%D8%A2%D9%84%D8%A7%D8%AA%20%D8%AA%D8%B4%D8%A8%D9%87%20%D8%A7%D9%84%D8%B1%D9%88%D8%A7%D9%81%D8%B9.mp4?alt=media&token=3384b734-89c9-4834-9829-cc49722a4e36'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني علوم الشغل والطاقة          ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B4%D8%BA%D9%84%20%D9%88%D8%A7%D9%84%D8%B7%D8%A7%D9%82%D8%A9.mp4?alt=media&token=6d770d09-afbb-45f7-a964-e1fd282ba4be'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني علوم الصوت (كيف ينتقل الصوت)        ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B5%D9%88%D8%AA%20(%D9%83%D9%8A%D9%81%20%D9%8A%D9%86%D8%AA%D9%82%D9%84%20%D8%A7%D9%84%D8%B5%D9%88%D8%AA).mp4?alt=media&token=22c03bba-0bdd-4cd4-a44c-7d859bd4a04d'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني علوم الصوت (ما حدة الصوت - ما فائدة الصدى)        ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B5%D9%88%D8%AA%20(%D9%85%D8%A7%20%D8%AD%D8%AF%D8%A9%20%D8%A7%D9%84%D8%B5%D9%88%D8%AA%20-%20%D9%85%D8%A7%20%D9%81%D8%A7%D8%A6%D8%AF%D8%A9%20%D8%A7%D9%84%D8%B5%D8%AF%D9%89).mp4?alt=media&token=44277936-4ad2-4dc8-b832-d79aaed408e0'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني علوم الضوء (لمائا نرى الألوان)        ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B6%D9%88%D8%A1%20(%D9%84%D9%85%D8%A7%D8%A6%D8%A7%20%D9%86%D8%B1%D9%89%20%D8%A7%D9%84%D8%A3%D9%84%D9%88%D8%A7%D9%86).mp4?alt=media&token=4f0d206d-5a8d-4b63-b7d5-023a62ec02c6'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني علوم الضوء      ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B6%D9%88%D8%A1.mp4?alt=media&token=2d11f09e-cbda-4639-a321-b97de9202df5'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني علوم العناصر مم تتكون الجزيئات؟ وكيف تصف العناصر؟      ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B9%D9%86%D8%A7%D8%B5%D8%B1%20%20%D9%85%D9%85%20%D8%AA%D8%AA%D9%83%D9%88%D9%86%20%D8%A7%D9%84%D8%AC%D8%B2%D9%8A%D8%A6%D8%A7%D8%AA%D8%9F%20%D9%88%D9%83%D9%8A%D9%81%20%D8%AA%D8%B5%D9%81%20%D8%A7%D9%84%D8%B9%D9%86%D8%A7%D8%B5%D8%B1%D8%9F.mp4?alt=media&token=aff8e009-de4f-478c-954f-28835450cdaf'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني علوم العناصر مم تتكون المادة؟ ومم تتكون الذرات؟      ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B9%D9%86%D8%A7%D8%B5%D8%B1%20%20%D9%85%D9%85%20%D8%AA%D8%AA%D9%83%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D8%A7%D8%AF%D8%A9%D8%9F%20%D9%88%D9%85%D9%85%20%D8%AA%D8%AA%D9%83%D9%88%D9%86%20%D8%A7%D9%84%D8%B0%D8%B1%D8%A7%D8%AA%D8%9F.mp4?alt=media&token=2c6d92ff-670f-4bba-a2a7-7ede43fe81ad'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني علوم العواصف ما العواصف الرعدية والثلجية والرملية    ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B9%D9%88%D8%A7%D8%B5%D9%81%20%20%D9%85%D8%A7%20%D8%A7%D9%84%D8%B9%D9%88%D8%A7%D8%B5%D9%81%20%D8%A7%D9%84%D8%B1%D8%B9%D8%AF%D9%8A%D8%A9%20%D9%88%D8%A7%D9%84%D8%AB%D9%84%D8%AC%D9%8A%D8%A9%20%D9%88%D8%A7%D9%84%D8%B1%D9%85%D9%84%D9%8A%D8%A9.mp4?alt=media&token=1816bc8a-9b9e-47f2-ac39-5464f5875231'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني علوم الفلزات    ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%81%D9%84%D8%B2%D8%A7%D8%AA.mp4?alt=media&token=11b9b759-dfb0-4217-a16c-4fe2e77bc68c'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني علوم اللافلزات واشباه الفلزات    ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%84%D8%A7%D9%81%D9%84%D8%B2%D8%A7%D8%AA%20%D9%88%D8%A7%D8%B4%D8%A8%D8%A7%D9%87%20%D8%A7%D9%84%D9%81%D9%84%D8%B2%D8%A7%D8%AA.mp4?alt=media&token=57b3a960-42c6-46fe-b348-36a58d033f3a'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني علوم المعادلات الكيميائية - اكتشاف حدوث التفاعل  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D8%AF%D9%84%D8%A7%D8%AA%20%D8%A7%D9%84%D9%83%D9%8A%D9%85%D9%8A%D8%A7%D8%A6%D9%8A%D8%A9%20-%20%D8%A7%D9%83%D8%AA%D8%B4%D8%A7%D9%81%20%D8%AD%D8%AF%D9%88%D8%AB%20%D8%A7%D9%84%D8%AA%D9%81%D8%A7%D8%B9%D9%84.mp4?alt=media&token=ab9dd6ab-4ae7-47ba-a47d-989d30dfe38a'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني علوم حل أسئلة الكتاب ص 178-181  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%AD%D9%84%20%D8%A3%D8%B3%D8%A6%D9%84%D8%A9%20%D8%A7%D9%84%D9%83%D8%AA%D8%A7%D8%A8%20%D8%B5%20178-181.mp4?alt=media&token=23e3b855-b0b6-4cc7-9f41-69e6fcecadc7'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني علوم حل أسئلة الكتاب صفحة 119-122  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%AD%D9%84%20%D8%A3%D8%B3%D8%A6%D9%84%D8%A9%20%D8%A7%D9%84%D9%83%D8%AA%D8%A7%D8%A8%20%D8%B5%D9%81%D8%AD%D8%A9%20119-122.mp4?alt=media&token=7dcd0760-9364-438c-8ee9-bc8edc75e7eb'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني علوم حل بعض أسئلة الكتاب صفحة 92-95  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%AD%D9%84%20%D8%A8%D8%B9%D8%B6%20%D8%A3%D8%B3%D8%A6%D9%84%D8%A9%20%D8%A7%D9%84%D9%83%D8%AA%D8%A7%D8%A8%20%D8%B5%D9%81%D8%AD%D8%A9%2092-95.mp4?alt=media&token=526a7bc1-44bb-453b-80d0-05d957f67c53'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني علوم كيف تتشكل الغيوم؟ وكيف يتشكل الهطول؟  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%83%D9%8A%D9%81%20%D8%AA%D8%AA%D8%B4%D9%83%D9%84%20%D8%A7%D9%84%D8%BA%D9%8A%D9%88%D9%85%D8%9F%20%D9%88%D9%83%D9%8A%D9%81%20%D9%8A%D8%AA%D8%B4%D9%83%D9%84%20%D8%A7%D9%84%D9%87%D8%B7%D9%88%D9%84%D8%9F.mp4?alt=media&token=47364fab-3d76-4b27-ba40-c0589a4ef7a5'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني علوم ما الذي يؤثر في المناخ؟ وما التغير المناخي؟  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%A7%20%D8%A7%D9%84%D8%B0%D9%8A%20%D9%8A%D8%A4%D8%AB%D8%B1%20%D9%81%D9%8A%20%D8%A7%D9%84%D9%85%D9%86%D8%A7%D8%AE%D8%9F%20%D9%88%D9%85%D8%A7%20%D8%A7%D9%84%D8%AA%D8%BA%D9%8A%D8%B1%20%D8%A7%D9%84%D9%85%D9%86%D8%A7%D8%AE%D9%8A%D8%9F.mp4?alt=media&token=4bc116b4-79ef-4b08-9ac3-011979541297'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني علوم ما الضوء؟ وكيف يتكون الظل؟  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%A7%20%D8%A7%D9%84%D8%B6%D9%88%D8%A1%D8%9F%20%D9%88%D9%83%D9%8A%D9%81%20%D9%8A%D8%AA%D9%83%D9%88%D9%86%20%D8%A7%D9%84%D8%B8%D9%84%D8%9F.mp4?alt=media&token=db3bb84e-6578-4759-adbd-1a4233bc5730'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني علوم ما الكتل اللهوائية والجبهات الهوائية؟خرائط الطقس  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%A7%20%D8%A7%D9%84%D9%83%D8%AA%D9%84%20%D8%A7%D9%84%D9%84%D9%87%D9%88%D8%A7%D8%A6%D9%8A%D8%A9%20%D9%88%D8%A7%D9%84%D8%AC%D8%A8%D9%87%D8%A7%D8%AA%20%D8%A7%D9%84%D9%87%D9%88%D8%A7%D8%A6%D9%8A%D8%A9%D8%9F%D8%AE%D8%B1%D8%A7%D8%A6%D8%B7%20%D8%A7%D9%84%D8%B7%D9%82%D8%B3.mp4?alt=media&token=25d85636-f5b5-4d02-8fff-e50f77c2be70'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني 1438 العلوم العناصر(مما تتكون المادة)  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B9%D9%86%D8%A7%D8%B5%D8%B1(%D9%85%D9%85%D8%A7%20%D8%AA%D8%AA%D9%83%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D8%A7%D8%AF%D8%A9).mp4?alt=media&token=bc0b873a-d95f-4d7b-aafb-7a71af87c15d'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني 1438 العلوم العناصر2  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B9%D9%86%D8%A7%D8%B5%D8%B12.mp4?alt=media&token=1a0df2e7-f934-4822-92e8-87b2c3a9c5c2'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني 1438 العلوم الفزات واللافلزات واشباه الفلزات2  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%81%D8%B2%D8%A7%D8%AA%20%D9%88%D8%A7%D9%84%D9%84%D8%A7%D9%81%D9%84%D8%B2%D8%A7%D8%AA%20%D9%88%D8%A7%D8%B4%D8%A8%D8%A7%D9%87%20%D8%A7%D9%84%D9%81%D9%84%D8%B2%D8%A7%D8%AA2.mp4?alt=media&token=b5133ee1-3d80-40a9-8498-42723ebd3855'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني 1438 العلوم الفلزات واللافلزات واشباه الفلزات 2  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%81%D9%84%D8%B2%D8%A7%D8%AA%20%D9%88%D8%A7%D9%84%D9%84%D8%A7%D9%81%D9%84%D8%B2%D8%A7%D8%AA%20%D9%88%D8%A7%D8%B4%D8%A8%D8%A7%D9%87%20%D8%A7%D9%84%D9%81%D9%84%D8%B2%D8%A7%D8%AA%202.mp4?alt=media&token=565c22d1-97ee-4855-ab90-878bb355fc61'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني 1438 العلوم الفلزات واللافلزات واشباه الفلزات1  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%81%D9%84%D8%B2%D8%A7%D8%AA%20%D9%88%D8%A7%D9%84%D9%84%D8%A7%D9%81%D9%84%D8%B2%D8%A7%D8%AA%20%D9%88%D8%A7%D8%B4%D8%A8%D8%A7%D9%87%20%D8%A7%D9%84%D9%81%D9%84%D8%B2%D8%A7%D8%AA1.mp4?alt=media&token=875653cd-0cdf-446d-b119-167a0bd2b21e'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني 1438 علوم العواصف 2  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%20%D8%A7%D9%84%D8%B9%D9%88%D8%A7%D8%B5%D9%81%202.mp4?alt=media&token=8f7c80a0-8dad-40f4-8cc5-e58981e1fa4b'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني 1438 علوم الشغل والطاقة(مامفهوم الشغل والطاقة؟)  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B4%D8%BA%D9%84%20%D9%88%D8%A7%D9%84%D8%B7%D8%A7%D9%82%D8%A9(%D9%85%D8%A7%D9%85%D9%81%D9%87%D9%88%D9%85%20%D8%A7%D9%84%D8%B4%D8%BA%D9%84%20%D9%88%D8%A7%D9%84%D8%B7%D8%A7%D9%82%D8%A9%D8%9F).mp4?alt=media&token=c035e833-b6cc-45f1-bfd1-5fb068b5f295'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني 1438 علوم الشغل والطاقة-1  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B4%D8%BA%D9%84%20%D9%88%D8%A7%D9%84%D8%B7%D8%A7%D9%82%D8%A9-1.mp4?alt=media&token=09970f85-734a-4fa5-9d8c-6a3d3d4f87e3'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني 1438 علوم الشغل والطاقة-2  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B4%D8%BA%D9%84%20%D9%88%D8%A7%D9%84%D8%B7%D8%A7%D9%82%D8%A9-2.mp4?alt=media&token=bc9054e7-4383-4aca-bc52-42b27f1f9684'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني 1438 علوم العواصف -1  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B4%D8%BA%D9%84%20%D9%88%D8%A7%D9%84%D8%B7%D8%A7%D9%82%D8%A9-2.mp4?alt=media&token=bc9054e7-4383-4aca-bc52-42b27f1f9684'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني 1438 علوم العواصف 3  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B9%D9%88%D8%A7%D8%B5%D9%81%203.mp4?alt=media&token=17b2143f-4ad4-4905-99cb-b00cf2d1f47a'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني 1438 علوم الغلاف الجوي والطقس ١  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%BA%D9%84%D8%A7%D9%81%20%D8%A7%D9%84%D8%AC%D9%88%D9%8A%20%D9%88%D8%A7%D9%84%D8%B7%D9%82%D8%B3%20%D9%A1.mp4?alt=media&token=b5b9e4f0-8b80-471f-b934-19fc29748473'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني 1438 علوم الغلاف الجوي والطقس ٢  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%BA%D9%84%D8%A7%D9%81%20%D8%A7%D9%84%D8%AC%D9%88%D9%8A%20%D9%88%D8%A7%D9%84%D8%B7%D9%82%D8%B3%20%D9%A2.mp4?alt=media&token=f6d47b58-a784-4e49-aba0-e308ff49bb0f'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني 1438 علوم الفلزات واللافلزات واشباه الفلزات1  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%81%D9%84%D8%B2%D8%A7%D8%AA%20%D9%88%D8%A7%D9%84%D9%84%D8%A7%D9%81%D9%84%D8%B2%D8%A7%D8%AA%20%D9%88%D8%A7%D8%B4%D8%A8%D8%A7%D9%87%20%D8%A7%D9%84%D9%81%D9%84%D8%B2%D8%A7%D8%AA1.mp4?alt=media&token=ee87bd69-e335-4418-891c-aae01b093eb2'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني 1438 علوم المناخ -1 (ما المناخ)  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%85%D9%86%D8%A7%D8%AE%20-1%20(%D9%85%D8%A7%20%D8%A7%D9%84%D9%85%D9%86%D8%A7%D8%AE).mp4?alt=media&token=01d765e1-8084-403e-8f8f-1f9a1ad21f8d'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني 1438 علوم التغير المناخي  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D8%AA%D8%BA%D9%8A%D8%B1%20%D8%A7%D9%84%D9%85%D9%86%D8%A7%D8%AE%D9%8A.mp4?alt=media&token=17d42de1-1c64-4262-906b-c37ef4383455'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني 1438 علوم الفلزات واللافلزات واشباه الفلزات-1  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D9%81%D9%84%D8%B2%D8%A7%D8%AA%20%D9%88%D8%A7%D9%84%D9%84%D8%A7%D9%81%D9%84%D8%B2%D8%A7%D8%AA%20%D9%88%D8%A7%D8%B4%D8%A8%D8%A7%D9%87%20%D8%A7%D9%84%D9%81%D9%84%D8%B2%D8%A7%D8%AA-1.mp4?alt=media&token=9e0294ed-0e4a-4138-9b14-56527c1dcf38'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني 1438 علومالفلزات واللافلزات واشباه الفلزات-2  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%D8%A7%D9%84%D9%81%D9%84%D8%B2%D8%A7%D8%AA%20%D9%88%D8%A7%D9%84%D9%84%D8%A7%D9%81%D9%84%D8%B2%D8%A7%D8%AA%20%D9%88%D8%A7%D8%B4%D8%A8%D8%A7%D9%87%20%D8%A7%D9%84%D9%81%D9%84%D8%B2%D8%A7%D8%AA-2.mp4?alt=media&token=e5f3f198-683e-4aaa-8e24-c2739c6ed5bd'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني 1438 العلوم التغيرات الفيزيائية(كيف تتغير حالة المادة؟)  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AA%D8%BA%D9%8A%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D9%81%D9%8A%D8%B2%D9%8A%D8%A7%D8%A6%D9%8A%D8%A9(%D9%83%D9%8A%D9%81%20%D8%AA%D8%AA%D8%BA%D9%8A%D8%B1%20%D8%AD%D8%A7%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%A7%D8%AF%D8%A9%D8%9F).mp4?alt=media&token=76c2bddd-0e83-44a0-ac1c-19d79e14d546'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني 1438 العلوم التغيرات الفيزيائية(ماالتمدد؟وماالانكماش؟)  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AA%D8%BA%D9%8A%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D9%81%D9%8A%D8%B2%D9%8A%D8%A7%D8%A6%D9%8A%D8%A9(%D9%85%D8%A7%D8%A7%D9%84%D8%AA%D9%85%D8%AF%D8%AF%D8%9F%D9%88%D9%85%D8%A7%D8%A7%D9%84%D8%A7%D9%86%D9%83%D9%85%D8%A7%D8%B4%D8%9F).mp4?alt=media&token=2d4d8285-20d5-49fe-af04-26ada241ae6c'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني 1438 علوم الالات البسيطة-2  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%A7%D9%84%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A8%D8%B3%D9%8A%D8%B7%D8%A9-2.mp4?alt=media&token=75cc1ece-0095-4089-9efe-c8247546449a'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني 1438 علوم الصوت-1  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B5%D9%88%D8%AA-1.mp4?alt=media&token=59c4043d-0f24-4e90-b2c3-a327645df5b0'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني 1438 علوم مما تتكون المادة  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%D8%B9%D9%84%D9%88%D9%85%20%D9%85%D9%85%D8%A7%20%D8%AA%D8%AA%D9%83%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D8%A7%D8%AF%D8%A9.mp4?alt=media&token=10946570-f006-4a6c-b0a1-38eaab62ef80'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني علوم العواصف ما الاعصار القمعي؟ وما الاعاصير الحلزونية  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B9%D9%88%D8%A7%D8%B5%D9%81%20%20%D9%85%D8%A7%20%D8%A7%D9%84%D8%A7%D8%B9%D8%B5%D8%A7%D8%B1%20%D8%A7%D9%84%D9%82%D9%85%D8%B9%D9%8A%D8%9F%20%D9%88%D9%85%D8%A7%20%D8%A7%D9%84%D8%A7%D8%B9%D8%A7%D8%B5%D9%8A%D8%B1%20%D8%A7%D9%84%D8%AD%D9%84%D8%B2%D9%88%D9%86%D9%8A%D8%A9.mp4?alt=media&token=52fcdaa5-1432-46f9-910f-7d72394a87a9'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني علوم ما الذي يغير الضغط الجوي؟  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%A7%20%D8%A7%D9%84%D8%B0%D9%8A%20%D9%8A%D8%BA%D9%8A%D8%B1%20%D8%A7%D9%84%D8%B6%D8%BA%D8%B7%20%D8%A7%D9%84%D8%AC%D9%88%D9%8A%D8%9F.mp4?alt=media&token=a27456ed-5b5c-4205-b9a3-87132313437d'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني علوم ما الرياح العالمية والمحلية؟وكيف تقيس الضغط الجوي  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%A7%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%AD%20%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%D9%8A%D8%A9%20%D9%88%D8%A7%D9%84%D9%85%D8%AD%D9%84%D9%8A%D8%A9%D8%9F%D9%88%D9%83%D9%8A%D9%81%20%D8%AA%D9%82%D9%8A%D8%B3%20%D8%A7%D9%84%D8%B6%D8%BA%D8%B7%20%D8%A7%D9%84%D8%AC%D9%88%D9%8A.mp4?alt=media&token=92cb0295-fa16-45b5-bf30-4bbd175a2e53'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني علوم ما المناخ؟ وما الذي يؤثر على المناخ  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%A7%20%D8%A7%D9%84%D9%85%D9%86%D8%A7%D8%AE%D8%9F%20%D9%88%D9%85%D8%A7%20%D8%A7%D9%84%D8%B0%D9%8A%20%D9%8A%D8%A4%D8%AB%D8%B1%20%D8%B9%D9%84%D9%89%20%D8%A7%D9%84%D9%85%D9%86%D8%A7%D8%AE.mp4?alt=media&token=1b03d7fa-791c-42ce-b891-c516107f6899'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني علوم العناصر(كيف تصنف العناصر-ما مجموعات العناصر الشائعة    ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B9%D9%86%D8%A7%D8%B5%D8%B1(%D9%83%D9%8A%D9%81%20%D8%AA%D8%B5%D9%86%D9%81%20%D8%A7%D9%84%D8%B9%D9%86%D8%A7%D8%B5%D8%B1-%D9%85%D8%A7%20%D9%85%D8%AC%D9%85%D9%88%D8%B9%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D9%86%D8%A7%D8%B5%D8%B1%20%D8%A7%D9%84%D8%B4%D8%A7%D8%A6%D8%B9%D8%A9.mp4?alt=media&token=15010054-f0c8-409f-bc10-4812d4ec9bfd'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني علوم العناصر(مما تتكون الذرات والجزيئات    ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B9%D9%86%D8%A7%D8%B5%D8%B1(%D9%85%D9%85%D8%A7%20%D8%AA%D8%AA%D9%83%D9%88%D9%86%20%D8%A7%D9%84%D8%B0%D8%B1%D8%A7%D8%AA%20%D9%88%D8%A7%D9%84%D8%AC%D8%B2%D9%8A%D8%A6%D8%A7%D8%AA.mp4?alt=media&token=feb3dc82-4bc8-4ae4-91e3-6d3dc19dce80'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني 1438 علوم الشغل والطاقة(مامفهوم الشغل والطاقة؟)  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B4%D8%BA%D9%84%20%D9%88%D8%A7%D9%84%D8%B7%D8%A7%D9%82%D8%A9(%D9%85%D8%A7%D9%85%D9%81%D9%87%D9%88%D9%85%20%D8%A7%D9%84%D8%B4%D8%BA%D9%84%20%D9%88%D8%A7%D9%84%D8%B7%D8%A7%D9%82%D8%A9%D8%9F).mp4?alt=media&token=ad395992-dd6f-4bca-bbca-5564b5b9b5e5'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني 1438 علوم الصوت-2  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B5%D9%88%D8%AA-2.mp4?alt=media&token=d112b9db-7c31-4619-b2b0-e0b2a0f761f0'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني 1438 علوم الضوء-1(ماالضوء؟-كيف يتكون الظل؟)  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B6%D9%88%D8%A1-1(%D9%85%D8%A7%D8%A7%D9%84%D8%B6%D9%88%D8%A1%D8%9F-%D9%83%D9%8A%D9%81%20%D9%8A%D8%AA%D9%83%D9%88%D9%86%20%D8%A7%D9%84%D8%B8%D9%84%D8%9F).mp4?alt=media&token=a54b5f9c-abe8-493c-a16e-2740e184b2ff'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني 1438 علوم العناصر(مما تتكون الذرات والجزيئات)  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B9%D9%86%D8%A7%D8%B5%D8%B1(%D9%85%D9%85%D8%A7%20%D8%AA%D8%AA%D9%83%D9%88%D9%86%20%D8%A7%D9%84%D8%B0%D8%B1%D8%A7%D8%AA%20%D9%88%D8%A7%D9%84%D8%AC%D8%B2%D9%8A%D8%A6%D8%A7%D8%AA).mp4?alt=media&token=e9f2c525-af97-4438-af94-0bf7b6375a59'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني 1438 علوم كيف تصنف العناصر؟-مامجموعات العناصر الشائعة؟  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%83%D9%8A%D9%81%20%D8%AA%D8%B5%D9%86%D9%81%20%D8%A7%D9%84%D8%B9%D9%86%D8%A7%D8%B5%D8%B1%D8%9F-%D9%85%D8%A7%D9%85%D8%AC%D9%85%D9%88%D8%B9%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D9%86%D8%A7%D8%B5%D8%B1%20%D8%A7%D9%84%D8%B4%D8%A7%D8%A6%D8%B9%D8%A9%D8%9F.mp4?alt=media&token=a0cec049-3edd-4cea-bbff-d1c64b24efe9'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني 1438 العلوم الالات البسيطة-1  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%A7%D9%84%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A8%D8%B3%D9%8A%D8%B7%D8%A9-1.mp4?alt=media&token=44dbca60-25c3-47e6-af89-0159a42e79a7'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'الخامس الابتدائي الفصل الدراسي الثاني 1438 علوم المركبات والتغيرات الكيميائية-3  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%85%D8%B1%D9%83%D8%A8%D8%A7%D8%AA%20%D9%88%D8%A7%D9%84%D8%AA%D8%BA%D9%8A%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D9%83%D9%8A%D9%85%D9%8A%D8%A7%D8%A6%D9%8A%D8%A9-3.mp4?alt=media&token=dc99cd95-50e5-4ca3-b8ef-711d5d4b22a9'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'خامس ابتدائي الأوفصل الدراسي الثاني 1438 علوم الآلات البسيطة  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%20%20%D8%A7%D9%84%D8%A3%D9%88%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%20%D8%A7%D9%84%D8%A2%D9%84%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A8%D8%B3%D9%8A%D8%B7%D8%A9.mp4?alt=media&token=c245b75c-5610-4ee2-953d-645005f50c65'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'خامس ابتدائي الفصل الدراسي الثاني 1438 علوم الصوت- 2  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B5%D9%88%D8%AA-%202.mp4?alt=media&token=d8dae2b1-40a5-4361-8798-c8ccac989a4c'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'خامس ابتدائي الفصل الدراسي الثاني 1438 علوم المقارنةبين أنواع المادة  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%85%D9%82%D8%A7%D8%B1%D9%86%D8%A9%D8%A8%D9%8A%D9%86%20%D8%A3%D9%86%D9%88%D8%A7%D8%B9%20%D8%A7%D9%84%D9%85%D8%A7%D8%AF%D8%A9.mp4?alt=media&token=8eeff4c9-a22a-4922-baaa-975a7a5dc943'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'خامس ابتدائي الفصل الدراسي الثاني 1438 علوم العواصف والمناخ  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D8%B9%D9%88%D8%A7%D8%B5%D9%81%20%D9%88%D8%A7%D9%84%D9%85%D9%86%D8%A7%D8%AE.mp4?alt=media&token=60709748-59ef-47cc-86ae-76bd7dfe60e6'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'خامس ابتدائي الفصل الدراسي الثاني 1438 علوم نماذج الطقس  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%D9%86%D9%85%D8%A7%D8%B0%D8%AC%20%D8%A7%D9%84%D8%B7%D9%82%D8%B3.mp4?alt=media&token=064b6c13-9092-4bc5-9940-f8183766bc74'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'خامس ابتدائي الفصل الدراسي الثاني 1438 علوم الضوء -1  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B6%D9%88%D8%A1%20-1.mp4?alt=media&token=695e979e-b881-4f60-aa7d-3fa164ef5718'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'خامس ابتدائي الفصل الدراسي الثاني 1438 علوم الضوء- 2  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B6%D9%88%D8%A1-%202.mp4?alt=media&token=94e4efbf-a2c0-47dc-b38e-6ce5e6c5fc39'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'خامس ابتدائي الفصل الدراسي الثاني 1438 علوم كيف ينعكس لبضوء وكيف ينكسر  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%83%D9%8A%D9%81%20%D9%8A%D9%86%D8%B9%D9%83%D8%B3%20%D9%84%D8%A8%D8%B6%D9%88%D8%A1%20%D9%88%D9%83%D9%8A%D9%81%20%D9%8A%D9%86%D9%83%D8%B3%D8%B1.mp4?alt=media&token=dd450030-8b9c-427a-b90c-39b5248f5fd0'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'خامس الابتدائي الفصل الدراسي الثاني 1438 العلوم العواصف  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B9%D9%88%D8%A7%D8%B5%D9%81.mp4?alt=media&token=ad4ac093-2a20-49ee-a5fe-f133facbaac7'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'خامس الابتدائي الفصل الدراسي الثاني 1438 العلوم الغلاف الجوي والطقس ( كيف تدفىء الشمس الارض)  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D8%BA%D9%84%D8%A7%D9%81%20%D8%A7%D9%84%D8%AC%D9%88%D9%8A%20%D9%88%D8%A7%D9%84%D8%B7%D9%82%D8%B3%20(%20%D9%83%D9%8A%D9%81%20%D8%AA%D8%AF%D9%81%D9%89%D8%A1%20%D8%A7%D9%84%D8%B4%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%B1%D8%B6).mp4?alt=media&token=4e082777-4ae8-40a6-8cb3-f9e282c5196e'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'خامس الابتدائي الفصل الدراسي الثاني 1438 العلوم الغلاف الجوي والطقس  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/5-2%2F%D8%AE%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%BA%D9%84%D8%A7%D9%81%20%D8%A7%D9%84%D8%AC%D9%88%D9%8A%20%D9%88%D8%A7%D9%84%D8%B7%D9%82%D8%B3.mp4?alt=media&token=08fbb11b-14d1-4457-b248-727c01b6de82'
        },
    ],
    [
        {
            'name': 'video1.mp4',
            'videoName': 'السادس الإبتدائي الفصل الدراسي الأول علوم نظرية الخلية          ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%86%D8%B8%D8%B1%D9%8A%D8%A9%20%D8%A7%D9%84%D8%AE%D9%84%D9%8A%D8%A9.mp4?alt=media&token=86c29dcd-53bf-42cf-be71-6c26c3eb1370'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'السادس الإبتدائي الفصل الدراسي الأول 1438 علوم التربة 1          ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D8%A9%201.mp4?alt=media&token=9e8fce64-e65a-4b6c-a1bc-0d85a39ea024'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'السادس الإبتدائي الفصل الدراسي الأول 1438 علوم الخلية النباتية والخلية الحيوانية 1          ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AE%D9%84%D9%8A%D8%A9%20%D8%A7%D9%84%D9%86%D8%A8%D8%A7%D8%AA%D9%8A%D8%A9%20%D9%88%D8%A7%D9%84%D8%AE%D9%84%D9%8A%D8%A9%20%D8%A7%D9%84%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D9%8A%D8%A9%201.mp4?alt=media&token=8e3b0d16-0eb0-4666-95af-aeecbf2266cf'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'السادس الإبتدائي الفصل الدراسي الأول 1438 علوم الخلية النباتية والخلية الحيوانية 2        ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AE%D9%84%D9%8A%D8%A9%20%D8%A7%D9%84%D9%86%D8%A8%D8%A7%D8%AA%D9%8A%D8%A9%20%D9%88%D8%A7%D9%84%D8%AE%D9%84%D9%8A%D8%A9%20%D8%A7%D9%84%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D9%8A%D8%A9%202.mp4?alt=media&token=c7eec1c0-47af-4e4d-a9e1-c5089c92109e'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'السادس الإبتدائي الفصل الدراسي الأول 1438 علوم الخلية النباتية والخلية الحيوانية 3        ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AE%D9%84%D9%8A%D8%A9%20%D8%A7%D9%84%D9%86%D8%A8%D8%A7%D8%AA%D9%8A%D8%A9%20%D9%88%D8%A7%D9%84%D8%AE%D9%84%D9%8A%D8%A9%20%D8%A7%D9%84%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D9%8A%D8%A9%203.mp4?alt=media&token=cb0f7497-a4e4-4c5d-8d7c-4c3f5a53fd8f'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'السادس الإبتدائي الفصل الدراسي الأول 1438 علوم الخلية النباتية والخلية الحيوانية 4      ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AE%D9%84%D9%8A%D8%A9%20%D8%A7%D9%84%D9%86%D8%A8%D8%A7%D8%AA%D9%8A%D8%A9%20%D9%88%D8%A7%D9%84%D8%AE%D9%84%D9%8A%D8%A9%20%D8%A7%D9%84%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D9%8A%D8%A9%204.mp4?alt=media&token=70364783-b000-4bf8-9446-f85d6e74b12f'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'السادس الإبتدائي الفصل الدراسي الأول 1438 علوم مقارنة الأنظمة البيئية 3      ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D9%82%D8%A7%D8%B1%D9%86%D8%A9%20%D8%A7%D9%84%D8%A3%D9%86%D8%B8%D9%85%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D9%8A%D8%A9%203.mp4?alt=media&token=652942f7-85ee-4a1d-a113-539c473dc8a5'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'السادس الإبتدائي الفصل الدراسي الأول 1438 علوم نظرية الخلية 1      ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%86%D8%B8%D8%B1%D9%8A%D8%A9%20%D8%A7%D9%84%D8%AE%D9%84%D9%8A%D8%A9%201.mp4?alt=media&token=27ae9208-7348-436a-adb2-2357bf664f50'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'السادس الإبتدائي الفصل الدراسي الأول 1438 علوم نظرية الخلية 2    ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%86%D8%B8%D8%B1%D9%8A%D8%A9%20%D8%A7%D9%84%D8%AE%D9%84%D9%8A%D8%A9%202.mp4?alt=media&token=b96303b1-4726-4c99-a9a6-1a1334f190a5'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'السادس الابتدائي الفصل الأول المتوسط الدراسي الثاني 1438 العلوم النجوم والمجرات    ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%86%D8%AC%D9%88%D9%85%20%D9%88%D8%A7%D9%84%D9%85%D8%AC%D8%B1%D8%A7%D8%AA.mp4?alt=media&token=e0e5a53b-2065-4da4-89f4-8e4458e00aa6'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'السادس الابتدائي الفصل الأول المتوسط الدراسي الثاني 1438 العلوم النظام الشمسي  ',
            'description': 'description',
            'url': ''
        },
        {
            'name': 'video2.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الأول العلوم الخلية النباتية والخلية الحيوانية  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%86%D8%B8%D8%A7%D9%85%20%D8%A7%D9%84%D8%B4%D9%85%D8%B3%D9%8A.mp4?alt=media&token=a30ccefb-a490-42b6-ac68-a6ba9458a40a'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الأول العلوم الطريقة العلمية والمهارات العلمية  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B7%D8%B1%D9%8A%D9%82%D8%A9%20%D8%A7%D9%84%D8%B9%D9%84%D9%85%D9%8A%D8%A9%20%D9%88%D8%A7%D9%84%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D9%84%D9%85%D9%8A%D8%A9.mp4?alt=media&token=c6f54691-c642-43d0-98aa-1cfcd9ea2da4'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الأول علوم عمليات الحياة في الانسان والحيوان الاخراج والهضم',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A7%D8%A9%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D9%86%D8%B3%D8%A7%D9%86%20%D9%88%D8%A7%D9%84%D8%AD%D9%8A%D9%88%D8%A7%D9%86%20%D8%A7%D9%84%D8%A7%D8%AE%D8%B1%D8%A7%D8%AC%20%D9%88%D8%A7%D9%84%D9%87%D8%B6%D9%85.mp4?alt=media&token=46e7ddba-722b-44ee-a6da-c7f415ebfd34'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الأول علوم عمليات الحياة في الانسان والحيوان الحركة والاحساس',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A7%D8%A9%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D9%86%D8%B3%D8%A7%D9%86%20%D9%88%D8%A7%D9%84%D8%AD%D9%8A%D9%88%D8%A7%D9%86%20%D8%A7%D9%84%D8%AD%D8%B1%D9%83%D8%A9%20%D9%88%D8%A7%D9%84%D8%A7%D8%AD%D8%B3%D8%A7%D8%B3.mp4?alt=media&token=0bf4508f-4f16-4878-ae67-0af5c1f9c079'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الأول علوم عمليات الحياة في المخلوقات الحية الدقيقة  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A7%D8%A9%20%D9%81%D9%8A%20%D8%A7%D9%84%D9%85%D8%AE%D9%84%D9%88%D9%82%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A9%20%D8%A7%D9%84%D8%AF%D9%82%D9%8A%D9%82%D8%A9.mp4?alt=media&token=79ddc341-2509-49f6-9124-f42a0f70a34c'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الأول 1438 علوم التربة 1 مالتربة ؟  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D8%A9%201%20%D9%85%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D8%A9%20%D8%9F.mp4?alt=media&token=010308f3-07e2-4396-86ce-d3cad6d980ba'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الأول 1438 علوم الحركة والإحساس 1  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AD%D8%B1%D9%83%D8%A9%20%D9%88%D8%A7%D9%84%D8%A5%D8%AD%D8%B3%D8%A7%D8%B3%201.mp4?alt=media&token=924e9052-0be5-4356-822a-11a2ff6f58f5'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الأول 1438 علوم الحركة والإحساس 2',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AD%D8%B1%D9%83%D8%A9%20%D9%88%D8%A7%D9%84%D8%A5%D8%AD%D8%B3%D8%A7%D8%B3%202.mp4?alt=media&token=835e06f5-1d56-4cf2-8f74-34995b3ef6c8'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الأول 1438 علوم الحركة والإحساس 3',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AD%D8%B1%D9%83%D8%A9%20%D9%88%D8%A7%D9%84%D8%A5%D8%AD%D8%B3%D8%A7%D8%B3%203.mp4?alt=media&token=d8177333-c7fb-45ed-a72c-8ee80caaf21e'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الأول 1438 علوم الحركة والإحساس 4  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AD%D8%B1%D9%83%D8%A9%20%D9%88%D8%A7%D9%84%D8%A5%D8%AD%D8%B3%D8%A7%D8%B3%204.mp4?alt=media&token=165a27c6-5a2f-460c-997b-e155a1f25b90'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الأول 1438 علوم السلاسل الغذائية  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D8%B3%D9%84%20%D8%A7%D9%84%D8%BA%D8%B0%D8%A7%D8%A6%D9%8A%D8%A9.mp4?alt=media&token=345adcc2-26c3-4cc0-afac-61335b2fc714'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الأول 1438 علوم الشبكات الغذائية - هرم الطاقة  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%B4%D8%A8%D9%83%D8%A7%D8%AA%20%D8%A7%D9%84%D8%BA%D8%B0%D8%A7%D8%A6%D9%8A%D8%A9%20-%20%D9%87%D8%B1%D9%85%20%D8%A7%D9%84%D8%B7%D8%A7%D9%82%D8%A9.mp4?alt=media&token=79948e7b-7457-4910-ac12-c581914b2524'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الأول 1438 علوم عمليات الحياة في المخلوقات الحية الدقيقة 2',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A7%D8%A9%20%D9%81%D9%8A%20%D8%A7%D9%84%D9%85%D8%AE%D9%84%D9%88%D9%82%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A9%20%D8%A7%D9%84%D8%AF%D9%82%D9%8A%D9%82%D8%A9%202.mp4?alt=media&token=7a9bf51f-ac6d-422d-93d5-54409b441083'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الأول 1438 علوم عمليات الحياة في المخلوقات الحية الدقيقة 3',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A7%D8%A9%20%D9%81%D9%8A%20%D8%A7%D9%84%D9%85%D8%AE%D9%84%D9%88%D9%82%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A9%20%D8%A7%D9%84%D8%AF%D9%82%D9%8A%D9%82%D8%A9%203.mp4?alt=media&token=e97de03a-ba3f-47e7-a316-623a3805c5f6'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الأول 1438 علوم عمليات الحياة في المخلوقات الحية الدقيقة 1',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A7%D8%A9%20%D9%81%D9%8A%20%D8%A7%D9%84%D9%85%D8%AE%D9%84%D9%88%D9%82%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A9%20%D8%A7%D9%84%D8%AF%D9%82%D9%8A%D9%82%D8%A9.mp4?alt=media&token=1de535a5-66b7-472e-8e88-8083439ccd6b'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الأول 1438 علوم عمليات الحياة في النباتات 1  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A7%D8%A9%20%D9%81%D9%8A%20%D8%A7%D9%84%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA%201.mp4?alt=media&token=b0607a99-66b6-4d08-8bb1-176481e641cf'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الأول 1438 علوم عمليات الحياة في النباتات 2  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A7%D8%A9%20%D9%81%D9%8A%20%D8%A7%D9%84%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA%202.mp4?alt=media&token=1bd0d849-f929-4d96-9ce6-af16130aa7ae'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الأول 1438 علوم عمليات الحياة في النباتات 3  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A7%D8%A9%20%D9%81%D9%8A%20%D8%A7%D9%84%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA%203.mp4?alt=media&token=375e8d25-059d-4518-aa83-d0f1230760b5'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الأول 1438 علوم عمليات الحياة في النباتات   ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A7%D8%A9%20%D9%81%D9%8A%20%D8%A7%D9%84%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA.mp4?alt=media&token=8db015ec-a8db-4fcd-bad4-b058084006d7'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الأول 1438 علوم ماالتنفس؟ ماالدوران؟ 1',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%A7%D8%A7%D9%84%D8%AA%D9%86%D9%81%D8%B3%D8%9F%20%D9%85%D8%A7%D8%A7%D9%84%D8%AF%D9%88%D8%B1%D8%A7%D9%86%D8%9F%201.mp4?alt=media&token=4b32e451-a847-44b5-9048-05419f65beed'
        }, {
            'name': 'video1.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الأول 1438 علوم ماالتنفس؟ ماالدوران؟ ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%A7%D8%A7%D9%84%D8%AA%D9%86%D9%81%D8%B3%D8%9F%20%D9%85%D8%A7%D8%A7%D9%84%D8%AF%D9%88%D8%B1%D8%A7%D9%86%D8%9F.mp4?alt=media&token=f3ece072-c796-425e-a43f-49a400af5dd1'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الأول 1438 علوم ماالهضم؟ ماالإخراج؟',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%A7%D8%A7%D9%84%D9%87%D8%B6%D9%85%D8%9F%20%D9%85%D8%A7%D8%A7%D9%84%D8%A5%D8%AE%D8%B1%D8%A7%D8%AC%D8%9F.mp4?alt=media&token=bd50eead-6f85-4862-b181-841c26784241'
        },
        {
            'name': 'video2.mp4',
            'videoName': ' 1السادس الابتدائي الفصل الدراسي الأول 1438 علوم ماالهضم؟ ماالإخراج؟',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%A7%D8%A7%D9%84%D9%87%D8%B6%D9%85%D8%9F%20%D9%85%D8%A7%D8%A7%D9%84%D8%A5%D8%AE%D8%B1%D8%A7%D8%AC%D8%9F%201.mp4?alt=media&token=2ffa7940-c3ce-4375-a256-f24f647536c3'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الأول 1438 علوم مقارنة الأنظمة البيئية 2  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D9%82%D8%A7%D8%B1%D9%86%D8%A9%20%D8%A7%D9%84%D8%A3%D9%86%D8%B8%D9%85%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D9%8A%D8%A9%202.mp4?alt=media&token=f90024e1-ba69-4eca-9b32-6b44b6d8169e'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الأول 1438 علوم مقارنة الأنظمة البيئية 3  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D9%82%D8%A7%D8%B1%D9%86%D8%A9%20%D8%A7%D9%84%D8%A3%D9%86%D8%B8%D9%85%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D9%8A%D8%A9%203.mp4?alt=media&token=4184e9e2-c389-477d-84d9-0e94adaf20a7'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الاول علوم الانظمة البيئية - الشبكات الغذائية وهرم الطاقة  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A7%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%A7%D9%86%D8%B8%D9%85%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D9%8A%D8%A9%20-%20%20%D8%A7%D9%84%D8%B4%D8%A8%D9%83%D8%A7%D8%AA%20%D8%A7%D9%84%D8%BA%D8%B0%D8%A7%D8%A6%D9%8A%D8%A9%20%D9%88%D9%87%D8%B1%D9%85%20%D8%A7%D9%84%D8%B7%D8%A7%D9%82%D8%A9.mp4?alt=media&token=c9bb11a7-e23e-4089-9b6e-304a9cad5970'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الاول علوم الانظمة البيئية - السلاسل الغذائية',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A7%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%A7%D9%86%D8%B8%D9%85%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D9%8A%D8%A9%20-%20%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D8%B3%D9%84%20%D8%A7%D9%84%D8%BA%D8%B0%D8%A7%D8%A6%D9%8A%D8%A9.mp4?alt=media&token=2af3cb3b-c095-4d8c-8261-cd44be6f929a'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الاول علوم الانظمة البيئية - مقارنة الانظمة البيئية المائية',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A7%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%A7%D9%86%D8%B8%D9%85%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D9%8A%D8%A9%20-%20%D9%85%D9%82%D8%A7%D8%B1%D9%86%D8%A9%20%D8%A7%D9%84%D8%A7%D9%86%D8%B8%D9%85%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D9%8A%D8%A9%20%D8%A7%D9%84%D9%85%D8%A7%D8%A6%D9%8A%D8%A9.mp4?alt=media&token=742debce-e871-493e-88b1-fbb4be1ee7c8'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الاول علوم الانظمة البيئية - مقارنة الانظمة البيئية على اليابسة  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A7%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%A7%D9%86%D8%B8%D9%85%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D9%8A%D8%A9%20-%20%D9%85%D9%82%D8%A7%D8%B1%D9%86%D8%A9%20%D8%A7%D9%84%D8%A7%D9%86%D8%B8%D9%85%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D9%8A%D8%A9%20%D8%B9%D9%84%D9%89%20%D8%A7%D9%84%D9%8A%D8%A7%D8%A8%D8%B3%D8%A9.mp4?alt=media&token=4d980593-cd77-4fd4-94c5-654afda9507c'
        },
        {
            'name': 'video2.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الاول علوم الانظمة البيئية  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A7%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%A7%D9%86%D8%B8%D9%85%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D9%8A%D8%A9.mp4?alt=media&token=783c4477-adba-4a54-aed6-63a49565cc9b'
        },
        {
            'name': 'video3.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الاول علوم عمليات الحياة في الانسان والحيوان(الحركة والاحساس)  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A7%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A7%D8%A9%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D9%86%D8%B3%D8%A7%D9%86%20%D9%88%D8%A7%D9%84%D8%AD%D9%8A%D9%88%D8%A7%D9%86(%D8%A7%D9%84%D8%AD%D8%B1%D9%83%D8%A9%20%D9%88%D8%A7%D9%84%D8%A7%D8%AD%D8%B3%D8%A7%D8%B3).mp4?alt=media&token=db50d016-cd62-4573-bd0d-3a4c48182c95'
        },
        {
            'name': 'video1.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الاول علوم موارد الارض والحفاظ عليها - التربة',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%A7%D9%88%D9%84%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D9%88%D8%A7%D8%B1%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B1%D8%B6%20%D9%88%D8%A7%D9%84%D8%AD%D9%81%D8%A7%D8%B8%20%D8%B9%D9%84%D9%8A%D9%87%D8%A7%20-%20%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D8%A9.mp4?alt=media&token=766688b9-0362-4175-b42d-73fa454479fc'
        }
    ],
    [
        {
            'name': 'video10.mp4',
            'videoName': 'الثالث الثانوي الفصل الدراسي الثاني علوم كيف تسري الكهرباء؟          ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%88%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%83%D9%8A%D9%81%20%D8%AA%D8%B3%D8%B1%D9%8A%20%D8%A7%D9%84%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A1%D8%9F.mp4?alt=media&token=88dd9f1c-b583-41f8-b88c-8382f7569ceb'
        },
        {
            'name': 'video11.mp4',
            'videoName': 'السادس الإبتدائي الفصل الدراسي الثاني علوم ما الكهرباء الساكنة؟          ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%A7%20%D8%A7%D9%84%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A1%20%D8%A7%D9%84%D8%B3%D8%A7%D9%83%D9%86%D8%A9%D8%9F.mp4?alt=media&token=b4400c0e-fffe-4c76-b047-0ac197f3891e'
        },
        {
            'name': 'video12.mp4',
            'videoName': 'السادس الإبتدائي الفصل الدراسي الثاني 1438 علوم النظام الشمسي 1          ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%86%D8%B8%D8%A7%D9%85%20%D8%A7%D9%84%D8%B4%D9%85%D8%B3%D9%8A%201.mp4?alt=media&token=303f06c1-50b3-4dd8-b540-ea683cf4bc36'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'السادس الإبتدائي الفصل الدراسي الثاني 1438 علوم النظام الشمسي 2        ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%86%D8%B8%D8%A7%D9%85%20%D8%A7%D9%84%D8%B4%D9%85%D8%B3%D9%8A%202.mp4?alt=media&token=641aa24e-2020-4f03-8864-dda2da72bed9'
        },
        {
            'name': 'video11.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني 1438 العلوم نظام الارض والشمس        ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%20%D9%86%D8%B8%D8%A7%D9%85%20%D8%A7%D9%84%D8%A7%D8%B1%D8%B6%20%D9%88%D8%A7%D9%84%D8%B4%D9%85%D8%B3.mp4?alt=media&token=17a4d734-dc1e-416e-8b32-116448495fd0'
        },
        {
            'name': 'video12.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني علوم ما سبب حدوث الكسوف والخسوف؟        ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%A7%20%D8%B3%D8%A8%D8%A8%20%D8%AD%D8%AF%D9%88%D8%AB%20%D8%A7%D9%84%D9%83%D8%B3%D9%88%D9%81%20%D9%88%D8%A7%D9%84%D8%AE%D8%B3%D9%88%D9%81%D8%9F.mp4?alt=media&token=1729e4d9-f2c4-47f2-8d59-59fe7499c44a'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني علوم مراجعة الوحدة الرابعة الفضاء      ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%20%D9%85%D8%B1%D8%A7%D8%AC%D8%B9%D8%A9%20%D8%A7%D9%84%D9%88%D8%AD%D8%AF%D8%A9%20%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%D8%A9%20%20%D8%A7%D9%84%D9%81%D8%B6%D8%A7%D8%A1.mp4?alt=media&token=d6cdec92-a898-4efd-a549-b92d347e2db2'
        },
        {
            'name': 'video11.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني علوم أنواع الدوائر الكهربائية - استخدام الكهرباء بأمان      ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A3%D9%86%D9%88%D8%A7%D8%B9%20%D8%A7%D9%84%D8%AF%D9%88%D8%A7%D8%A6%D8%B1%20%D8%A7%D9%84%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A6%D9%8A%D8%A9%20-%20%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D8%A7%D9%85%20%D8%A7%D9%84%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A1%20%D8%A8%D8%A3%D9%85%D8%A7%D9%86.mp4?alt=media&token=df001b76-af3b-48a7-abb5-e479e103ff35'
        },
        {
            'name': 'video12.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني علوم استعمالات الأحماض والقواعد      ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D8%B3%D8%AA%D8%B9%D9%85%D8%A7%D9%84%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A3%D8%AD%D9%85%D8%A7%D8%B6%20%D9%88%D8%A7%D9%84%D9%82%D9%88%D8%A7%D8%B9%D8%AF.mp4?alt=media&token=53ed4204-8045-4c8b-9ad1-64ca8d64d21f'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني علوم الأحماض والقواعد    ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%A3%D8%AD%D9%85%D8%A7%D8%B6%20%D9%88%D8%A7%D9%84%D9%82%D9%88%D8%A7%D8%B9%D8%AF.mp4?alt=media&token=c848b560-5e7d-433d-aa0f-62a5e48aebf9'
        },
        {
            'name': 'video11.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني علوم القانون الأول لنيوتن في الحرك',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%D9%84%D9%86%D9%8A%D9%88%D8%AA%D9%86%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%AD%D8%B1%D9%83%D8%A9.mp4?alt=media&token=2ec57f54-9d46-4e37-81d8-d630e7df5db3'
        },
        {
            'name': 'video12.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني علوم النسب المئوية والكسور العشرية',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%86%D8%B3%D8%A8%20%D8%A7%D9%84%D9%85%D8%A6%D9%88%D9%8A%D8%A9%20%D9%88%D8%A7%D9%84%D9%83%D8%B3%D9%88%D8%B1%20%D8%A7%D9%84%D8%B9%D8%B4%D8%B1%D9%8A%D8%A9.mp4?alt=media&token=b08a7d23-a20e-48da-b731-e611893e5c64'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني علوم حل أسئلة الكتاب ص 148 و 149',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%AD%D9%84%20%D8%A3%D8%B3%D8%A6%D9%84%D8%A9%20%D8%A7%D9%84%D9%83%D8%AA%D8%A7%D8%A8%20%D8%B5%20148%20%D9%88%20149.mp4?alt=media&token=d53fef46-1195-4341-8358-8e9533b93782'
        },
        {
            'name': 'video11.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني علوم حل بعض أسئلة الكتاب صـ119-120',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%AD%D9%84%20%D8%A8%D8%B9%D8%B6%20%D8%A3%D8%B3%D8%A6%D9%84%D8%A9%20%D8%A7%D9%84%D9%83%D8%AA%D8%A7%D8%A8%20%D8%B5%D9%80119-120.mp4?alt=media&token=6a3631ff-ef36-45d4-a22e-8a54c7671a52'
        },
        {
            'name': 'video12.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني علوم حل بعض اسئلة الكتاب صفحة 94,95',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%AD%D9%84%20%D8%A8%D8%B9%D8%B6%20%D8%A7%D8%B3%D8%A6%D9%84%D8%A9%20%D8%A7%D9%84%D9%83%D8%AA%D8%A7%D8%A8%20%D8%B5%D9%81%D8%AD%D8%A9%2094%2C95.mp4?alt=media&token=2fdc68eb-42b0-4b75-a76b-e4eba041e19d'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني علوم كيف يمكن فصل المخاليط ما التقطير؟',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%83%D9%8A%D9%81%20%D9%8A%D9%85%D9%83%D9%86%20%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D9%85%D8%AE%D8%A7%D9%84%D9%8A%D8%B7%20%20%D9%85%D8%A7%20%D8%A7%D9%84%D8%AA%D9%82%D8%B7%D9%8A%D8%B1%D8%9F.mp4?alt=media&token=1492b2a2-d33b-43f2-9a33-96f1013b2f57'
        },
        {
            'name': 'video11.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني علوم ما أنواع الدوائر الكهربائية؟',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%A7%20%D8%A3%D9%86%D9%88%D8%A7%D8%B9%20%D8%A7%D9%84%D8%AF%D9%88%D8%A7%D8%A6%D8%B1%20%D8%A7%D9%84%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A6%D9%8A%D8%A9%D8%9F.mp4?alt=media&token=cd4777e6-a83b-40c5-b2fd-9d91b976e758'
        },
        {
            'name': 'video12.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني علوم ما التسارع؟',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%A7%20%D8%A7%D9%84%D8%AA%D8%B3%D8%A7%D8%B1%D8%B9%D8%9F.mp4?alt=media&token=bd662a8c-9903-404d-9643-3e3e7a1f6e70'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني علوم ما التفاعلات الماصة والطاردة للحرارة؟',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%A7%20%D8%A7%D9%84%D8%AA%D9%81%D8%A7%D8%B9%D9%84%D8%A7%D8%AA%20%D8%A7%D9%84%D9%85%D8%A7%D8%B5%D8%A9%20%D9%88%D8%A7%D9%84%D8%B7%D8%A7%D8%B1%D8%AF%D8%A9%20%D9%84%D9%84%D8%AD%D8%B1%D8%A7%D8%B1%D8%A9%D8%9F.mp4?alt=media&token=e1f1eb6a-b9f5-43fe-8f4d-6cdace998ed3'
        },
        {
            'name': 'video11.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني علوم ما الجاذبية؟ وما الاحتكاك',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%A7%20%D8%A7%D9%84%D8%AC%D8%A7%D8%B0%D8%A8%D9%8A%D8%A9%D8%9F%20%D9%88%D9%85%D8%A7%20%D8%A7%D9%84%D8%A7%D8%AD%D8%AA%D9%83%D8%A7%D9%83%D8%9F.mp4?alt=media&token=5c9608e2-b61f-4e23-bd86-1163a828f787'
        },
        {
            'name': 'video12.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني علوم ما الحركة؟ ما السرعة؟',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%A7%20%D8%A7%D9%84%D8%AD%D8%B1%D9%83%D8%A9%D8%9F%20%D9%85%D8%A7%20%D8%A7%D9%84%D8%B3%D8%B1%D8%B9%D8%A9%D8%9F.mp4?alt=media&token=18925e90-1574-4b2e-b716-5bc46bfd3956'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني علوم ما الخصائص المختلفة ل',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%A7%20%D8%A7%D9%84%D8%AE%D8%B5%D8%A7%D8%A6%D8%B5%20%D8%A7%D9%84%D9%85%D8%AE%D8%AA%D9%84%D9%81%D8%A9%20%D9%84%D9%84%D8%B9%D9%86%D8%A7%D8%B5%D8%B1%D8%9F.mp4?alt=media&token=1525bcad-4af4-4e00-963c-271f520c4b94'
        },
        {
            'name': 'video11.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني علوم ما القانون الأول لنيوتن في الحركة؟',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%A7%20%D8%A7%D9%84%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20%D9%84%D9%86%D9%8A%D9%88%D8%AA%D9%86%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%AD%D8%B1%D9%83%D8%A9%D8%9F.mp4?alt=media&token=45d54d59-9186-44dc-a776-8fd9f24e9927'
        },
        {
            'name': 'video12.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني علوم ما القوى؟',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%A7%20%D8%A7%D9%84%D9%82%D9%88%D9%89%D8%9F.mp4?alt=media&token=a7cb48a3-6643-4e75-8e28-928aab909b99'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني علوم ما الكثافة؟ ما الطفو؟ مالخصائص الفيزيائية؟',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%A7%20%D8%A7%D9%84%D9%83%D8%AB%D8%A7%D9%81%D8%A9%D8%9F%20%D9%85%D8%A7%20%D8%A7%D9%84%D8%B7%D9%81%D9%88%D8%9F%20%D9%85%D8%A7%D9%84%D8%AE%D8%B5%D8%A7%D8%A6%D8%B5%20%D8%A7%D9%84%D9%81%D9%8A%D8%B2%D9%8A%D8%A7%D8%A6%D9%8A%D8%A9%D8%9F.mp4?alt=media&token=ad7eaafc-8840-44b3-80f7-f671ec099149'
        },
        {
            'name': 'video11.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني علوم ما المجرات؟ وما الانفجار العظيم',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%A7%20%D8%A7%D9%84%D9%85%D8%AC%D8%B1%D8%A7%D8%AA%D8%9F%20%D9%88%D9%85%D8%A7%20%D8%A7%D9%84%D8%A7%D9%86%D9%81%D8%AC%D8%A7%D8%B1%20%D8%A7%D9%84%D8%B9%D8%B8%D9%8A%D9%85.mp4?alt=media&token=a66f6b5c-cefb-4e19-bc56-b922e608f934'
        },
        {
            'name': 'video12.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني علوم ما المخاليط؟ ما بعض انواع المخاليط؟',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%A7%20%D8%A7%D9%84%D9%85%D8%AE%D8%A7%D9%84%D9%8A%D8%B7%D8%9F%20%D9%85%D8%A7%20%D8%A8%D8%B9%D8%B6%20%D8%A7%D9%86%D9%88%D8%A7%D8%B9%20%D8%A7%D9%84%D9%85%D8%AE%D8%A7%D9%84%D9%8A%D8%B7%D8%9F.mp4?alt=media&token=e8e8db4a-6d81-4e8f-94ba-ba579e1c5709'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني علوم ما المغناطيسات الكهربائية؟',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%A7%20%D8%A7%D9%84%D9%85%D8%BA%D9%86%D8%A7%D8%B7%D9%8A%D8%B3%D8%A7%D8%AA%20%D8%A7%D9%84%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A6%D9%8A%D8%A9%D8%9F.mp4?alt=media&token=f7f3686c-7fbe-4768-8430-763a3aae0a44'
        },
        {
            'name': 'video11.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني علوم ما المغناطيسية؟',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%A7%20%D8%A7%D9%84%D9%85%D8%BA%D9%86%D8%A7%D8%B7%D9%8A%D8%B3%D9%8A%D8%A9%D8%9F.mp4?alt=media&token=a7f668aa-b4d2-4cf3-beca-ff63d2292be4'
        },
        {
            'name': 'video12.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني علوم نظام الارض والشمس كيف نثبت ان الارض تدور',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%86%D8%B8%D8%A7%D9%85%20%D8%A7%D9%84%D8%A7%D8%B1%D8%B6%20%D9%88%D8%A7%D9%84%D8%B4%D9%85%D8%B3%20%20%D9%83%D9%8A%D9%81%20%D9%86%D8%AB%D8%A8%D8%AA%20%D8%A7%D9%86%20%D8%A7%D9%84%D8%A7%D8%B1%D8%B6%20%D8%AA%D8%AF%D9%88%D8%B1.mp4?alt=media&token=cad02ad9-a2b4-4efa-93c7-0b953e3dafa5'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني علوم هل المحاليل مخاليط متجانسة؟',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%87%D9%84%20%D8%A7%D9%84%D9%85%D8%AD%D8%A7%D9%84%D9%8A%D9%84%20%D9%85%D8%AE%D8%A7%D9%84%D9%8A%D8%B7%20%D9%85%D8%AA%D8%AC%D8%A7%D9%86%D8%B3%D8%A9%D8%9F.mp4?alt=media&token=d327e611-3994-44ba-8e47-970143940ef9'
        },
        {
            'name': 'video11.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني علوم مراجعة الوحدة الرابعة الفضاء',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%D8%B9%D9%84%D9%88%D9%85%20%D9%85%D8%B1%D8%A7%D8%AC%D8%B9%D8%A9%20%D8%A7%D9%84%D9%88%D8%AD%D8%AF%D8%A9%20%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%D8%A9%20%20%D8%A7%D9%84%D9%81%D8%B6%D8%A7%D8%A1.mp4?alt=media&token=45d07df2-d159-4720-8421-7e1d01553d7f'
        },
        {
            'name': 'video12.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني 1438 العلوم الخصائص الكيميائية(2)(ماالاحماض؟مالقواعد؟)',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%20%20%D8%A7%D9%84%D8%AE%D8%B5%D8%A7%D8%A6%D8%B5%20%D8%A7%D9%84%D9%83%D9%8A%D9%85%D9%8A%D8%A7%D8%A6%D9%8A%D8%A9(2)(%D9%85%D8%A7%D8%A7%D9%84%D8%A7%D8%AD%D9%85%D8%A7%D8%B6%D8%9F%D9%85%D8%A7%D9%84%D9%82%D9%88%D8%A7%D8%B9%D8%AF%D8%9F).mp4?alt=media&token=025ec91e-d23d-4394-b920-3b6da026c8bc'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني 1438 العلوم التغيرات الكيميائية 1',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AA%D8%BA%D9%8A%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D9%83%D9%8A%D9%85%D9%8A%D8%A7%D8%A6%D9%8A%D8%A9%201.mp4?alt=media&token=35fc8b55-2fdf-4761-b704-2f09d94cc0a9'
        },
        {
            'name': 'video11.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني 1438 العلوم الماء والمخاليط 2',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%85%D8%A7%D8%A1%20%D9%88%D8%A7%D9%84%D9%85%D8%AE%D8%A7%D9%84%D9%8A%D8%B7%202.mp4?alt=media&token=25934da9-0242-435f-a958-5aa93ce0f896'
        },
        {
            'name': 'video12.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني 1438 علوم الحركة(2)مالسرعة وماالتسارع؟',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%20%D8%A7%D9%84%D8%AD%D8%B1%D9%83%D8%A9(2)%D9%85%D8%A7%D9%84%D8%B3%D8%B1%D8%B9%D8%A9%20%D9%88%D9%85%D8%A7%D8%A7%D9%84%D8%AA%D8%B3%D8%A7%D8%B1%D8%B9%D8%9F.mp4?alt=media&token=ff3d6701-f7af-4f93-b49e-896e688ae290'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني 1438 علوم الخصائص الكيميائية1  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D8%AE%D8%B5%D8%A7%D8%A6%D8%B5%20%D8%A7%D9%84%D9%83%D9%8A%D9%85%D9%8A%D8%A7%D8%A6%D9%8A%D8%A91.mp4?alt=media&token=7d61045c-13ab-41d5-b42e-17f735e3e333'
        },
        {
            'name': 'video11.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني 1438 علوم القوى والحركة-1(ماالقوى؟ ماالجاذبية؟)  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%82%D9%88%D9%89%20%D9%88%D8%A7%D9%84%D8%AD%D8%B1%D9%83%D8%A9-1(%D9%85%D8%A7%D8%A7%D9%84%D9%82%D9%88%D9%89%D8%9F%20%D9%85%D8%A7%D8%A7%D9%84%D8%AC%D8%A7%D8%B0%D8%A8%D9%8A%D8%A9%D8%9F).mp4?alt=media&token=7760d156-b425-46d4-b2f1-85cd4eb94be2'
        },
        {
            'name': 'video12.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني 1438 علوم القوى والحركة-2  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%82%D9%88%D9%89%20%D9%88%D8%A7%D9%84%D8%AD%D8%B1%D9%83%D8%A9-2.mp4?alt=media&token=af3d3816-f55f-4fc5-b305-7ce409e65d88'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني 1438 علوم الكهرباء-1(ماالكهرباء الساكنة؟)  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A1-1(%D9%85%D8%A7%D8%A7%D9%84%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A1%20%D8%A7%D9%84%D8%B3%D8%A7%D9%83%D9%86%D8%A9%D8%9F).mp4?alt=media&token=9a35f259-fdf8-490f-b63f-17ded5cbed62'
        },
        {
            'name': 'video11.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني 1438 علوم الكهرباء-2(كيف تسري الكهرباء؟)  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A1-2(%D9%83%D9%8A%D9%81%20%D8%AA%D8%B3%D8%B1%D9%8A%20%D8%A7%D9%84%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A1%D8%9F).mp4?alt=media&token=77184b4a-b3d6-4432-8006-b92d02a86a48'
        },
        {
            'name': 'video12.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني 1438 علوم النجوم والمجرات -1  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%86%D8%AC%D9%88%D9%85%20%D9%88%D8%A7%D9%84%D9%85%D8%AC%D8%B1%D8%A7%D8%AA%20-1.mp4?alt=media&token=a99e5069-f370-461b-8219-2609e8eb587b'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني 1438 علوم النجوم والمجرات -2  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%86%D8%AC%D9%88%D9%85%20%D9%88%D8%A7%D9%84%D9%85%D8%AC%D8%B1%D8%A7%D8%AA%20-2.mp4?alt=media&token=e69432f1-02c2-49a5-a87b-626603215e66'
        },
        {
            'name': 'video11.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني 1438 علوم النظام الشمسي -1  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%86%D8%B8%D8%A7%D9%85%20%D8%A7%D9%84%D8%B4%D9%85%D8%B3%D9%8A%20-1.mp4?alt=media&token=9726ec62-5abe-4fc7-b137-a5f0e49d8cbc'
        },
        {
            'name': 'video12.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني 1438 علوم النظام الشمسي -2  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%86%D8%B8%D8%A7%D9%85%20%D8%A7%D9%84%D8%B4%D9%85%D8%B3%D9%8A%20-2.mp4?alt=media&token=b33083c2-0599-4de2-9363-d92010189524'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني 1438 علوم تدريبات على درس الصنف اللغوي (المصادر)  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8%D8%A7%D8%AA%20%D8%B9%D9%84%D9%89%20%D8%AF%D8%B1%D8%B3%20%D8%A7%D9%84%D8%B5%D9%86%D9%81%20%D8%A7%D9%84%D9%84%D8%BA%D9%88%D9%8A%20(%D8%A7%D9%84%D9%85%D8%B5%D8%A7%D8%AF%D8%B1).mp4?alt=media&token=30e96828-209f-4726-997b-3a3ac3782259'
        },
        {
            'name': 'video11.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني 1438 علوم الخصائص الفيزيائية للمادة 1  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D8%AE%D8%B5%D8%A7%D8%A6%D8%B5%20%D8%A7%D9%84%D9%81%D9%8A%D8%B2%D9%8A%D8%A7%D8%A6%D9%8A%D8%A9%20%D9%84%D9%84%D9%85%D8%A7%D8%AF%D8%A9%201.mp4?alt=media&token=3767a481-7213-42ac-83e7-40eb68d76785'
        },
        {
            'name': 'video12.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني 1438 علوم الخصائص الفيزيائية للمادة 2  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D8%AE%D8%B5%D8%A7%D8%A6%D8%B5%20%D8%A7%D9%84%D9%81%D9%8A%D8%B2%D9%8A%D8%A7%D8%A6%D9%8A%D8%A9%20%D9%84%D9%84%D9%85%D8%A7%D8%AF%D8%A9%202.mp4?alt=media&token=d33e2ba6-78f4-41e3-8cae-6dbd03e8c880'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني 1438 علوم الماء والمخاليط-3  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D9%85%D8%A7%D8%A1%20%D9%88%D8%A7%D9%84%D9%85%D8%AE%D8%A7%D9%84%D9%8A%D8%B7-3.mp4?alt=media&token=d9df3bb6-ba01-41be-8448-206dd604b159'
        },
        {
            'name': 'video12.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني علوم كيف يبدوا القمر؟ وما الذي يسبب اطوارة  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%B9%D9%84%D9%88%D9%85%20%D9%83%D9%8A%D9%81%20%D9%8A%D8%A8%D8%AF%D9%88%D8%A7%20%D8%A7%D9%84%D9%82%D9%85%D8%B1%D8%9F%20%D9%88%D9%85%D8%A7%20%D8%A7%D9%84%D8%B0%D9%8A%20%D9%8A%D8%B3%D8%A8%D8%A8%20%D8%A7%D8%B7%D9%88%D8%A7%D8%B1%D8%A9.mp4?alt=media&token=3665afb8-3266-4dda-9760-31205f2ba169'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثانيعلومنظام الارض والشمس ما فصول السنة  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%D8%B9%D9%84%D9%88%D9%85%D9%86%D8%B8%D8%A7%D9%85%20%D8%A7%D9%84%D8%A7%D8%B1%D8%B6%20%D9%88%D8%A7%D9%84%D8%B4%D9%85%D8%B3%20%20%D9%85%D8%A7%20%D9%81%D8%B5%D9%88%D9%84%20%D8%A7%D9%84%D8%B3%D9%86%D8%A9.mp4?alt=media&token=fed6f296-ccde-4bf3-8f91-028af174f579'
        },
        {
            'name': 'video11.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني 1438 علوم القوى والحركة-1(ماالقوى والجاذبية؟)  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%82%D9%88%D9%89%20%D9%88%D8%A7%D9%84%D8%AD%D8%B1%D9%83%D8%A9-1(%D9%85%D8%A7%D8%A7%D9%84%D9%82%D9%88%D9%89%20%D9%88%D8%A7%D9%84%D8%AC%D8%A7%D8%B0%D8%A8%D9%8A%D8%A9%D8%9F).mp4?alt=media&token=37699fd8-9df1-435b-9f1a-d5f60cbba222'
        },
        {
            'name': 'video12.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني 1438 علوم الكهرباء-3  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A1-3.mp4?alt=media&token=888eb01d-80a6-4aef-8884-9e8c829c6659'
        },
        {
            'name': 'video10.mp4',
            'videoName': 'السادس الابتدائي الفصل الدراسي الثاني 1438 علوم الماء والمخاليط  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%201438%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D8%A7%D9%84%D9%85%D8%A7%D8%A1%20%D9%88%D8%A7%D9%84%D9%85%D8%AE%D8%A7%D9%84%D9%8A%D8%B7.mp4?alt=media&token=86db119b-8b6e-4ee6-9f69-9393e5d697e8'
        },
        {
            'name': 'video11.mp4',
            'videoName': 'السادس الابتدائيالفصل الدراسي الثاني علوم ما النجوم وخصائصها؟وما المجموعات النجمية؟  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%A7%20%D8%A7%D9%84%D9%86%D8%AC%D9%88%D9%85%20%D9%88%D8%AE%D8%B5%D8%A7%D8%A6%D8%B5%D9%87%D8%A7%D8%9F%D9%88%D9%85%D8%A7%20%D8%A7%D9%84%D9%85%D8%AC%D9%85%D9%88%D8%B9%D8%A7%D8%AA%20%D8%A7%D9%84%D9%86%D8%AC%D9%85%D9%8A%D8%A9%D8%9F.mp4?alt=media&token=ad5ee17f-3287-4400-a09d-91487e545b61'
        },
        {
            'name': 'video12.mp4',
            'videoName': 'السادس الايتدائي الفصل الدراسي الثاني علوم ما النظام الشمسي؟وما الكواكب الداخلية وما الكويكبات  ',
            'description': 'description',
            'url': 'https://firebasestorage.googleapis.com/v0/b/ionic-ceb73.appspot.com/o/6-2%2F%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%A7%D9%84%D8%A7%D9%8A%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%20%D8%A7%D9%84%D9%81%D8%B5%D9%84%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20%20%D8%B9%D9%84%D9%88%D9%85%20%20%D9%85%D8%A7%20%D8%A7%D9%84%D9%86%D8%B8%D8%A7%D9%85%20%D8%A7%D9%84%D8%B4%D9%85%D8%B3%D9%8A%D8%9F%D9%88%D9%85%D8%A7%20%D8%A7%D9%84%D9%83%D9%88%D8%A7%D9%83%D8%A8%20%D8%A7%D9%84%D8%AF%D8%A7%D8%AE%D9%84%D9%8A%D8%A9%20%D9%88%D9%85%D8%A7%20%D8%A7%D9%84%D9%83%D9%88%D9%8A%D9%83%D8%A8%D8%A7%D8%AA.mp4?alt=media&token=5e956fc0-2fea-4519-bf26-a486bffc1470'
        }
    ]
]);
//# sourceMappingURL=videoLinks.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__video_video__ = __webpack_require__(287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__video_video__["a" /* VideoComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__video_video__["a" /* VideoComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_streaming_media__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VideoComponent = /** @class */ (function () {
    function VideoComponent(streamingMedia) {
        this.streamingMedia = streamingMedia;
    }
    /**
     * @description play video on media stream player
     */
    VideoComponent.prototype.play = function () {
        var options = {
            successCallback: function () { console.log('Video played'); },
            errorCallback: function (e) { console.log(e); },
            shouldAutoClose: true,
            controls: true
        };
        this.streamingMedia.playVideo(this.video.file.nativeURL, options);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], VideoComponent.prototype, "video", void 0);
    VideoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'video-play',template:/*ion-inline-start:"/home/othman/Desktop/des/design/src/components/video/video.html"*/'<div class="video-block" (click)="play()">\n    <ion-card text-center>\n        <p>{{video.metadata.videoName}}</p>\n<!--       <p>{{video.metadata.description}}</p> -->\n  		<ion-icon name="arrow-dropright"></ion-icon>\n    </ion-card>\n</div>'/*ion-inline-end:"/home/othman/Desktop/des/design/src/components/video/video.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_streaming_media__["a" /* StreamingMedia */]])
    ], VideoComponent);
    return VideoComponent;
}());

//# sourceMappingURL=video.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StreamingMedia; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(99);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Streaming Media
 * @description
 * This plugin allows you to stream audio and video in a fullscreen, native player on iOS and Android.
 *
 * @usage
 * ```typescript
 * import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
 *
 * constructor(private streamingMedia: StreamingMedia) { }
 *
 * let options: StreamingVideoOptions = {
 *   successCallback: () => { console.log('Video played') },
 *   errorCallback: (e) => { console.log('Error streaming') },
 *   orientation: 'landscape',
 *   shouldAutoClose: true,
 *   controls: false
 * };
 *
 * this.streamingMedia.playVideo('https://path/to/video/stream', options);
 *
 * ```
 * @interfaces
 * StreamingVideoOptions
 * StreamingAudioOptions
 */
var StreamingMedia = (function (_super) {
    __extends(StreamingMedia, _super);
    function StreamingMedia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Streams a video
     * @param videoUrl {string} The URL of the video
     * @param options {StreamingVideoOptions} Options
     */
    /**
       * Streams a video
       * @param videoUrl {string} The URL of the video
       * @param options {StreamingVideoOptions} Options
       */
    StreamingMedia.prototype.playVideo = /**
       * Streams a video
       * @param videoUrl {string} The URL of the video
       * @param options {StreamingVideoOptions} Options
       */
    function (videoUrl, options) { };
    /**
     * Streams an audio
     * @param audioUrl {string} The URL of the audio stream
     * @param options {StreamingAudioOptions} Options
     */
    /**
       * Streams an audio
       * @param audioUrl {string} The URL of the audio stream
       * @param options {StreamingAudioOptions} Options
       */
    StreamingMedia.prototype.playAudio = /**
       * Streams an audio
       * @param audioUrl {string} The URL of the audio stream
       * @param options {StreamingAudioOptions} Options
       */
    function (audioUrl, options) { };
    /**
     * Stops streaming audio
     */
    /**
       * Stops streaming audio
       */
    StreamingMedia.prototype.stopAudio = /**
       * Stops streaming audio
       */
    function () { };
    /**
     * Pauses streaming audio
     */
    /**
       * Pauses streaming audio
       */
    StreamingMedia.prototype.pauseAudio = /**
       * Pauses streaming audio
       */
    function () { };
    /**
     * Resumes streaming audio
     */
    /**
       * Resumes streaming audio
       */
    StreamingMedia.prototype.resumeAudio = /**
       * Resumes streaming audio
       */
    function () { };
    StreamingMedia.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
    ];
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", void 0)
    ], StreamingMedia.prototype, "playVideo", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", void 0)
    ], StreamingMedia.prototype, "playAudio", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], StreamingMedia.prototype, "stopAudio", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true, platforms: ['iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], StreamingMedia.prototype, "pauseAudio", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true, platforms: ['iOS'] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], StreamingMedia.prototype, "resumeAudio", null);
    /**
     * @name Streaming Media
     * @description
     * This plugin allows you to stream audio and video in a fullscreen, native player on iOS and Android.
     *
     * @usage
     * ```typescript
     * import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
     *
     * constructor(private streamingMedia: StreamingMedia) { }
     *
     * let options: StreamingVideoOptions = {
     *   successCallback: () => { console.log('Video played') },
     *   errorCallback: (e) => { console.log('Error streaming') },
     *   orientation: 'landscape',
     *   shouldAutoClose: true,
     *   controls: false
     * };
     *
     * this.streamingMedia.playVideo('https://path/to/video/stream', options);
     *
     * ```
     * @interfaces
     * StreamingVideoOptions
     * StreamingAudioOptions
     */
    StreamingMedia = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* Plugin */])({
            pluginName: 'StreamingMedia',
            plugin: 'cordova-plugin-streaming-media',
            pluginRef: 'plugins.streamingMedia',
            repo: 'https://github.com/nchutchind/cordova-plugin-streaming-media',
            platforms: ['Amazon Fire OS', 'Android', 'iOS']
        })
    ], StreamingMedia);
    return StreamingMedia;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=0.js.map