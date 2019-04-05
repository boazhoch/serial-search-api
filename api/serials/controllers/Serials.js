'use strict';

/**
 * Serials.js controller
 *
 * @description: A set of functions called "actions" for managing `Serials`.
 */

module.exports = {

  /**
   * Retrieve serials records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.serials.search(ctx.query);
    } else {
      return strapi.services.serials.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a serials record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.serials.fetch(ctx.params);
  },

  /**
   * Count serials records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.serials.count(ctx.query);
  },

  /**
   * Create a/an serials record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.serials.add(ctx.request.body);
  },

  /**
   * Update a/an serials record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.serials.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an serials record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.serials.remove(ctx.params);
  }
};
