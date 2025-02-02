// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
  BaseExternalAccountClient,
  GaxiosPromise,
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  StreamMethodOptions,
  GlobalOptions,
  GoogleAuth,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {Readable} from 'stream';

export namespace places_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  interface StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?:
      | string
      | OAuth2Client
      | JWT
      | Compute
      | UserRefreshClient
      | BaseExternalAccountClient
      | GoogleAuth;

    /**
     * V1 error format.
     */
    '$.xgafv'?: string;
    /**
     * OAuth access token.
     */
    access_token?: string;
    /**
     * Data format for response.
     */
    alt?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    upload_protocol?: string;
  }

  /**
   * Places API (New)
   *
   *
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const places = google.places('v1');
   * ```
   */
  export class Places {
    context: APIRequestContext;
    places: Resource$Places;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.places = new Resource$Places(this.context);
    }
  }

  /**
   * A latitude-longitude viewport, represented as two diagonally opposite `low` and `high` points. A viewport is considered a closed region, i.e. it includes its boundary. The latitude bounds must range between -90 to 90 degrees inclusive, and the longitude bounds must range between -180 to 180 degrees inclusive. Various cases include: - If `low` = `high`, the viewport consists of that single point. - If `low.longitude` \> `high.longitude`, the longitude range is inverted (the viewport crosses the 180 degree longitude line). - If `low.longitude` = -180 degrees and `high.longitude` = 180 degrees, the viewport includes all longitudes. - If `low.longitude` = 180 degrees and `high.longitude` = -180 degrees, the longitude range is empty. - If `low.latitude` \> `high.latitude`, the latitude range is empty. Both `low` and `high` must be populated, and the represented box cannot be empty (as specified by the definitions above). An empty viewport will result in an error. For example, this viewport fully encloses New York City: { "low": { "latitude": 40.477398, "longitude": -74.259087 \}, "high": { "latitude": 40.91618, "longitude": -73.70018 \} \}
   */
  export interface Schema$GoogleGeoTypeViewport {
    /**
     * Required. The high point of the viewport.
     */
    high?: Schema$GoogleTypeLatLng;
    /**
     * Required. The low point of the viewport.
     */
    low?: Schema$GoogleTypeLatLng;
  }
  /**
   * Information about the author of the UGC data. Used in Photo, and Review.
   */
  export interface Schema$GoogleMapsPlacesV1AuthorAttribution {
    /**
     * Output only. Name of the author of the Photo or Review.
     */
    displayName?: string | null;
    /**
     * Output only. Profile photo URI of the author of the Photo or Review.
     */
    photoUri?: string | null;
    /**
     * Output only. URI of the author of the Photo or Review.
     */
    uri?: string | null;
  }
  /**
   * Circle with a LatLng as center and radius.
   */
  export interface Schema$GoogleMapsPlacesV1Circle {
    /**
     * Required. Center latitude and longitude. The range of latitude must be within [-90.0, 90.0]. The range of the longitude must be within [-180.0, 180.0].
     */
    center?: Schema$GoogleTypeLatLng;
    /**
     * Required. Radius measured in meters. The radius must be within [0.0, 50000.0].
     */
    radius?: number | null;
  }
  /**
   * All the information representing a Place.
   */
  export interface Schema$GoogleMapsPlacesV1Place {
    /**
     * Information about the accessibility options a place offers.
     */
    accessibilityOptions?: Schema$GoogleMapsPlacesV1PlaceAccessibilityOptions;
    /**
     * Repeated components for each locality level. Note the following facts about the address_components[] array: - The array of address components may contain more components than the formatted_address. - The array does not necessarily include all the political entities that contain an address, apart from those included in the formatted_address. To retrieve all the political entities that contain a specific address, you should use reverse geocoding, passing the latitude/longitude of the address as a parameter to the request. - The format of the response is not guaranteed to remain the same between requests. In particular, the number of address_components varies based on the address requested and can change over time for the same address. A component can change position in the array. The type of the component can change. A particular component may be missing in a later response.
     */
    addressComponents?: Schema$GoogleMapsPlacesV1PlaceAddressComponent[];
    /**
     * The place's address in adr microformat: http://microformats.org/wiki/adr.
     */
    adrFormatAddress?: string | null;
    /**
     * A set of data provider that must be shown with this result.
     */
    attributions?: Schema$GoogleMapsPlacesV1PlaceAttribution[];
    /**
     * The business status for the place.
     */
    businessStatus?: string | null;
    /**
     * Specifies if the business supports curbside pickup.
     */
    curbsidePickup?: boolean | null;
    /**
     * The hours of operation for the next seven days (including today). The time period starts at midnight on the date of the request and ends at 11:59 pm six days later. This field includes the special_days subfield of all hours, set for dates that have exceptional hours.
     */
    currentOpeningHours?: Schema$GoogleMapsPlacesV1PlaceOpeningHours;
    /**
     * Contains an array of entries for the next seven days including information about secondary hours of a business. Secondary hours are different from a business's main hours. For example, a restaurant can specify drive through hours or delivery hours as its secondary hours. This field populates the type subfield, which draws from a predefined list of opening hours types (such as DRIVE_THROUGH, PICKUP, or TAKEOUT) based on the types of the place. This field includes the special_days subfield of all hours, set for dates that have exceptional hours.
     */
    currentSecondaryOpeningHours?: Schema$GoogleMapsPlacesV1PlaceOpeningHours[];
    /**
     * Specifies if the business supports delivery.
     */
    delivery?: boolean | null;
    /**
     * Specifies if the business supports indoor or outdoor seating options.
     */
    dineIn?: boolean | null;
    /**
     * The localized name of the place, suitable as a short human-readable description. For example, "Google Sydney", "Starbucks", "Pyrmont", etc.
     */
    displayName?: Schema$GoogleTypeLocalizedText;
    /**
     * Contains a summary of the place. A summary is comprised of a textual overview, and also includes the language code for these if applicable. Summary text must be presented as-is and can not be modified or altered.
     */
    editorialSummary?: Schema$GoogleTypeLocalizedText;
    /**
     * A full, human-readable address for this place.
     */
    formattedAddress?: string | null;
    /**
     * A URL providing more information about this place.
     */
    googleMapsUri?: string | null;
    /**
     * Background color for icon_mask in hex format, e.g. #909CE1.
     */
    iconBackgroundColor?: string | null;
    /**
     * A truncated URL to an v2 icon mask. User can access different icon type by appending type suffix to the end (eg, ".svg" or ".png").
     */
    iconMaskBaseUri?: string | null;
    /**
     * The unique identifier of a place.
     */
    id?: string | null;
    /**
     * A human-readable phone number for the place, in international format.
     */
    internationalPhoneNumber?: string | null;
    /**
     * The position of this place.
     */
    location?: Schema$GoogleTypeLatLng;
    /**
     * An ID representing this place which may be used to look up this place again (a.k.a. the API "resource" name: places/place_id).
     */
    name?: string | null;
    /**
     * A human-readable phone number for the place, in national format.
     */
    nationalPhoneNumber?: string | null;
    /**
     * Plus code of the place location lat/long.
     */
    plusCode?: Schema$GoogleMapsPlacesV1PlacePlusCode;
    /**
     * Price level of the place.
     */
    priceLevel?: string | null;
    /**
     * A rating between 1.0 and 5.0, based on user reviews of this place.
     */
    rating?: number | null;
    /**
     * The regular hours of operation.
     */
    regularOpeningHours?: Schema$GoogleMapsPlacesV1PlaceOpeningHours;
    /**
     * Contains an array of entries for information about regular secondary hours of a business. Secondary hours are different from a business's main hours. For example, a restaurant can specify drive through hours or delivery hours as its secondary hours. This field populates the type subfield, which draws from a predefined list of opening hours types (such as DRIVE_THROUGH, PICKUP, or TAKEOUT) based on the types of the place.
     */
    regularSecondaryOpeningHours?: Schema$GoogleMapsPlacesV1PlaceOpeningHours[];
    /**
     * Specifies if the place supports reservations.
     */
    reservable?: boolean | null;
    /**
     * List of reviews about this place.
     */
    reviews?: Schema$GoogleMapsPlacesV1Review[];
    /**
     * Specifies if the place serves beer.
     */
    servesBeer?: boolean | null;
    /**
     * Specifies if the place serves breakfast.
     */
    servesBreakfast?: boolean | null;
    /**
     * Specifies if the place serves brunch.
     */
    servesBrunch?: boolean | null;
    /**
     * Specifies if the place serves dinner.
     */
    servesDinner?: boolean | null;
    /**
     * Specifies if the place serves lunch.
     */
    servesLunch?: boolean | null;
    /**
     * Specifies if the place serves vegetarian food.
     */
    servesVegetarianFood?: boolean | null;
    /**
     * Specifies if the place serves wine.
     */
    servesWine?: boolean | null;
    /**
     * Specifies if the business supports takeout.
     */
    takeout?: boolean | null;
    /**
     * A set of type tags for this result. For example, "political" and "locality". See: https://developers.google.com/maps/documentation/places/web-service/place-types
     */
    types?: string[] | null;
    /**
     * The total number of reviews (with or without text) for this place.
     */
    userRatingCount?: number | null;
    /**
     * Number of minutes this place's timezone is currently offset from UTC. This is expressed in minutes to support timezones that are offset by fractions of an hour, e.g. X hours and 15 minutes.
     */
    utcOffsetMinutes?: number | null;
    /**
     * A viewport suitable for displaying the place on an average-sized map.
     */
    viewport?: Schema$GoogleGeoTypeViewport;
    /**
     * The authoritative website for this place, e.g. a business' homepage. Note that for places that are part of a chain (e.g. an IKEA store), this will usually be the website for the individual store, not the overall chain.
     */
    websiteUri?: string | null;
  }
  /**
   * Information about the accessibility options a place offers.
   */
  export interface Schema$GoogleMapsPlacesV1PlaceAccessibilityOptions {
    /**
     * Places has wheelchair accessible entrance.
     */
    wheelchairAccessibleEntrance?: boolean | null;
  }
  /**
   * The structured components that form the formatted address, if this information is available.
   */
  export interface Schema$GoogleMapsPlacesV1PlaceAddressComponent {
    /**
     * The language used to format this components, in CLDR notation.
     */
    languageCode?: string | null;
    /**
     * The full text description or name of the address component. For example, an address component for the country Australia may have a long_name of "Australia".
     */
    longText?: string | null;
    /**
     * An abbreviated textual name for the address component, if available. For example, an address component for the country of Australia may have a short_name of "AU".
     */
    shortText?: string | null;
    /**
     * An array indicating the type(s) of the address component.
     */
    types?: string[] | null;
  }
  /**
   * Information about data providers of this place.
   */
  export interface Schema$GoogleMapsPlacesV1PlaceAttribution {
    /**
     * Name of the Place's data provider.
     */
    provider?: string | null;
    /**
     * URI to the Place's data provider.
     */
    providerUri?: string | null;
  }
  /**
   * Information about business hour of the place.
   */
  export interface Schema$GoogleMapsPlacesV1PlaceOpeningHours {
    /**
     * Is this place open right now? Always present unless we lack time-of-day or timezone data for these opening hours.
     */
    openNow?: boolean | null;
    /**
     * The periods that this place is open during the week. The periods are in chronological order, starting with Sunday in the place-local timezone. An empty (but not absent) value indicates a place that is never open, e.g. because it is closed temporarily for renovations.
     */
    periods?: Schema$GoogleMapsPlacesV1PlaceOpeningHoursPeriod[];
    /**
     * A type string used to identify the type of secondary hours.
     */
    secondaryHoursType?: string | null;
    /**
     * Structured information for special days that fall within the period that the returned opening hours cover. Special days are days that could impact the business hours of a place, e.g. Christmas day. Set for current_opening_hours and current_secondary_opening_hours if there are exceptional hours.
     */
    specialDays?: Schema$GoogleMapsPlacesV1PlaceOpeningHoursSpecialDay[];
    /**
     * Localized strings describing the opening hours of this place, one string for each day of the week. Will be empty if the hours are unknown or could not be converted to localized text. Example: "Sun: 18:00–06:00"
     */
    weekdayDescriptions?: string[] | null;
  }
  /**
   * A period the place remains in open_now status.
   */
  export interface Schema$GoogleMapsPlacesV1PlaceOpeningHoursPeriod {
    /**
     * The time that the place starts to be closed.
     */
    close?: Schema$GoogleMapsPlacesV1PlaceOpeningHoursPeriodPoint;
    /**
     * The time that the place starts to be open.
     */
    open?: Schema$GoogleMapsPlacesV1PlaceOpeningHoursPeriodPoint;
  }
  /**
   * Status changing points.
   */
  export interface Schema$GoogleMapsPlacesV1PlaceOpeningHoursPeriodPoint {
    /**
     * Date in the local timezone for the place.
     */
    date?: Schema$GoogleTypeDate;
    /**
     * A day of the week, as an integer in the range 0-6. 0 is Sunday, 1 is Monday, etc.
     */
    day?: number | null;
    /**
     * The hour in 2 digits. Ranges from 00 to 23.
     */
    hour?: number | null;
    /**
     * The minute in 2 digits. Ranges from 00 to 59.
     */
    minute?: number | null;
    /**
     * Whether or not this endpoint was truncated. Truncation occurs when the real hours are outside the times we are willing to return hours between, so we truncate the hours back to these boundaries. This ensures that at most 24 * 7 hours from midnight of the day of the request are returned.
     */
    truncated?: boolean | null;
  }
  /**
   * Structured information for special days that fall within the period that the returned opening hours cover. Special days are days that could impact the business hours of a place, e.g. Christmas day.
   */
  export interface Schema$GoogleMapsPlacesV1PlaceOpeningHoursSpecialDay {
    /**
     * The date of this special day.
     */
    date?: Schema$GoogleTypeDate;
  }
  /**
   * Plus code (http://plus.codes) is a location reference with two formats: global code defining a 14mx14m (1/8000th of a degree) or smaller rectangle, and compound code, replacing the prefix with a reference location.
   */
  export interface Schema$GoogleMapsPlacesV1PlacePlusCode {
    /**
     * Place's compound code, such as "33GV+HQ, Ramberg, Norway", containing the suffix of the global code and replacing the prefix with a formatted name of a reference entity.
     */
    compoundCode?: string | null;
    /**
     * Place's global (full) code, such as "9FWM33GV+HQ", representing an 1/8000 by 1/8000 degree area (~14 by 14 meters).
     */
    globalCode?: string | null;
  }
  /**
   * Information about a review of a place.
   */
  export interface Schema$GoogleMapsPlacesV1Review {
    /**
     * Output only. This review's author.
     */
    authorAttribution?: Schema$GoogleMapsPlacesV1AuthorAttribution;
    /**
     * Output only. The review text in its original language.
     */
    originalText?: Schema$GoogleTypeLocalizedText;
    /**
     * Output only. Timestamp for the review.
     */
    publishTime?: string | null;
    /**
     * Output only. A number between 1.0 and 5.0, a.k.a. the number of stars.
     */
    rating?: number | null;
    /**
     * Output only. A string of formatted recent time, expressing the review time relative to the current time in a form appropriate for the language and country.
     */
    relativePublishTimeDescription?: string | null;
    /**
     * Output only. The localized text of the review.
     */
    text?: Schema$GoogleTypeLocalizedText;
  }
  /**
   * Request proto for SearchText.
   */
  export interface Schema$GoogleMapsPlacesV1SearchTextRequest {
    /**
     * The requested place type. Full list of types supported: https://developers.google.com/maps/documentation/places/web-service/place-types. Only support one included type.
     */
    includedType?: string | null;
    /**
     * Place details will be displayed with the preferred language if available. If the language code is unspecified or unrecognized, place details of any language may be returned, with a preference for English if such details exist. Current list of supported languages: https://developers.google.com/maps/faq#languagesupport.
     */
    languageCode?: string | null;
    /**
     * The region to search. This location serves as a bias which means results around given location might be returned. Cannot be set along with location_restriction.
     */
    locationBias?: Schema$GoogleMapsPlacesV1SearchTextRequestLocationBias;
    /**
     * The region to search. This location serves as a restriction which means results outside given location will not be returned. Cannot be set along with location_bias.
     */
    locationRestriction?: Schema$GoogleMapsPlacesV1SearchTextRequestLocationRestriction;
    /**
     * Maximum number of results to return. It must be between 1 and 20, inclusively. If the number is unset, it falls back to the upper limit. If the number is set to negative or exceeds the upper limit, an INVALID_ARGUMENT error is returned.
     */
    maxResultCount?: number | null;
    /**
     * Filter out results whose average user rating is strictly less than this limit. A valid value must be an float between 0 and 5 (inclusively) at a 0.5 cadence i.e. [0, 0.5, 1.0, ... , 5.0] inclusively. This is to keep parity with LocalRefinement_UserRating. The input rating will round up to the nearest 0.5(ceiling). For instance, a rating of 0.6 will eliminate all results with a less than 1.0 rating.
     */
    minRating?: number | null;
    /**
     * Used to restrict the search to places that are currently open.
     */
    openNow?: boolean | null;
    /**
     * Used to restrict the search to places that are marked as certain price levels. Users can choose any combinations of price levels. Default to select all price levels.
     */
    priceLevels?: string[] | null;
    /**
     * How results will be ranked in the response.
     */
    rankPreference?: string | null;
    /**
     * The Unicode country/region code (CLDR) of the location where the request is coming from. This parameter is used to display the place details, like region-specific place name, if available. The parameter can affect results based on applicable law. For more information, see http://www.unicode.org/reports/tr35/#unicode_region_subtag. Note that 3-digit region codes are not currently supported.
     */
    regionCode?: string | null;
    /**
     * Used to set strict type filtering for included_type. If set to true, only results of the same type will be returned. Default to false.
     */
    strictTypeFiltering?: boolean | null;
    /**
     * Required. The text query for textual search.
     */
    textQuery?: string | null;
  }
  /**
   * The region to search. This location serves as a bias which means results around given location might be returned.
   */
  export interface Schema$GoogleMapsPlacesV1SearchTextRequestLocationBias {
    /**
     * A circle defined by center point and radius.
     */
    circle?: Schema$GoogleMapsPlacesV1Circle;
    /**
     * A rectangle box defined by northeast and southwest corner.
     */
    rectangle?: Schema$GoogleGeoTypeViewport;
  }
  /**
   * The region to search. This location serves as a restriction which means results outside given location will not be returned.
   */
  export interface Schema$GoogleMapsPlacesV1SearchTextRequestLocationRestriction {
    /**
     * A rectangle box defined by northeast and southwest corner.
     */
    rectangle?: Schema$GoogleGeoTypeViewport;
  }
  /**
   * Response proto for SearchText.
   */
  export interface Schema$GoogleMapsPlacesV1SearchTextResponse {
    /**
     * A list of places that meet the user's text search criteria.
     */
    places?: Schema$GoogleMapsPlacesV1Place[];
  }
  /**
   * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
   */
  export interface Schema$GoogleTypeDate {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | null;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | null;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | null;
  }
  /**
   * An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges.
   */
  export interface Schema$GoogleTypeLatLng {
    /**
     * The latitude in degrees. It must be in the range [-90.0, +90.0].
     */
    latitude?: number | null;
    /**
     * The longitude in degrees. It must be in the range [-180.0, +180.0].
     */
    longitude?: number | null;
  }
  /**
   * Localized variant of a text in a particular language.
   */
  export interface Schema$GoogleTypeLocalizedText {
    /**
     * The text's BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string | null;
    /**
     * Localized string in the language corresponding to language_code below.
     */
    text?: string | null;
  }

  export class Resource$Places {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Text query based place search.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    searchText(
      params: Params$Resource$Places$Searchtext,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    searchText(
      params?: Params$Resource$Places$Searchtext,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleMapsPlacesV1SearchTextResponse>;
    searchText(
      params: Params$Resource$Places$Searchtext,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    searchText(
      params: Params$Resource$Places$Searchtext,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleMapsPlacesV1SearchTextResponse>,
      callback: BodyResponseCallback<Schema$GoogleMapsPlacesV1SearchTextResponse>
    ): void;
    searchText(
      params: Params$Resource$Places$Searchtext,
      callback: BodyResponseCallback<Schema$GoogleMapsPlacesV1SearchTextResponse>
    ): void;
    searchText(
      callback: BodyResponseCallback<Schema$GoogleMapsPlacesV1SearchTextResponse>
    ): void;
    searchText(
      paramsOrCallback?:
        | Params$Resource$Places$Searchtext
        | BodyResponseCallback<Schema$GoogleMapsPlacesV1SearchTextResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleMapsPlacesV1SearchTextResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleMapsPlacesV1SearchTextResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleMapsPlacesV1SearchTextResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Places$Searchtext;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Places$Searchtext;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://places.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/places:searchText').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleMapsPlacesV1SearchTextResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleMapsPlacesV1SearchTextResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Places$Searchtext
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleMapsPlacesV1SearchTextRequest;
  }
}
